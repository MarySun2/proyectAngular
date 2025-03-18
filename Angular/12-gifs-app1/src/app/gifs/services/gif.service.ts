import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy-interfaces';
import { Gif } from '../interfaces/gif-interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';


const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string, gifs[]>
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
};


@Injectable({ providedIn: 'root'})

export class GifService {

  //propiedades
  private http = inject (HttpClient); // lo cual se utiliza el cliente aca es decir se injecta

   trendingGifs = signal<Gif[]>([]); // esto viene de la interface creada llamada gif.interface
   trendingGifsLoading = signal(true);

   //[ [gif,gif,gif,], [gif,gif,gif,], [gif,gif,gif,], [gif,gif,gif,] ]

   trendingGifGroup = computed <Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i +=3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    console.log(groups);
    return groups; //[ [g1, g2, g3], [g4, g5]]
   });

   searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
   searchHistoryKeys = computed(() =>Object.keys(this.searchHistory()));


  constructor() {
    this.loadTrendingGifs();
    // console.log("Servicio Creado");
   }


   //localStorage
   saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });


   loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }


  searchGifs(query: string): Observable<Gif[]> {
    return this.http
     .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
       params: {
         api_key: environment.giphyApiKey,
         limit: 20,
         q: query,
       },
     })
     .pipe(
      map( ({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

      //Historial
      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items,
        }));
      })
     );
    //  .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

    //   console.log({searh: gifs });
    // });
  }


  //Metodo
  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
