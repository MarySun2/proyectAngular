import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy-interfaces';
import { Gif } from '../interfaces/gif-interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //propiedades
  private http = inject (HttpClient); // lo cual se utiliza el cliente aca es decir se injecta
  trendingGifs = signal <Gif[]>([]) // esto viene de la interface creada llamada gif.interface

  constructor() {
    this.loadTrendingGifs();
   }

  loadTrendingGifs() {

    this.http.get <GiphyResponse> (`${ environment.giphyUrl }/gifs/trending`,
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        }
      }).subscribe( (resp) => {
        // console.log({ resp });
        // resp.data[0].images.original.url forma de hacerlo
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        console.log(gifs);

      });  // Para que la peticion http se dispare hay que suscribirse y se manda un colbat
  }
}
