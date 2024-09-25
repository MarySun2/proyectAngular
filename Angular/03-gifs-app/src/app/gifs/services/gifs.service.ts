import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

//Otra forma de hacerlo
//const GIPHY_API_KEY = 'beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[]= [];

  private _tagsHistory:string[] = [];
  private apiKey:       string ='beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';
  private serviceUrl:   string ='https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  //Metodo

  private organizeHistory(tag:string) {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag)=> oldTag !== tag )
    }
    this._tagsHistory.unshift(tag); // lo punga al inicio
    this._tagsHistory = this._tagsHistory.splice(0,10) //Que solo haga 10 busquedas
    this.saveLocalStorage(); // Mantiene la informacion en el local storage
  }

  private saveLocalStorage() :void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() :void {
    if( !localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')! );

    if( this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0] );
  }

  searchTag(tag:string) : void {
    if(tag.length ===0) return;

     // Validación para evitar números
    //  const regex = /^[a-zA-Z]+$/;
    //  if (!regex.test(tag)) {
    //    console.log('No se permiten números en el tag.');
    //    return; // Sale del método si el tag contiene números
    //  }

  this.organizeHistory(tag);

  console.log(this._tagsHistory);

  const params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('limit', 10)
  .set('q', tag)

  this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}) // Se puede reducir
  .subscribe(resp => {
    console.log(resp);

    this.gifList = resp.data;
    console.log({gifs: this.gifList});
  });


  // Primera Forma de hacerlo:
  // fetch('https://api.giphy.com/v1/gifs/search?api_key=beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw&q=valorant&limit=10')
  // .then(resp => resp.json())
  // .then(data=> console.log(data));

  //Segunda Forma de hacerlo
  // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw&q=valorant&limit=10')
  // const data = await resp.json();
  // console.log(data);
  }
}
