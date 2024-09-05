import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Otra forma de hacerlo
//const GIPHY_API_KEY = 'beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];
  private apiKey:       string ='beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';
  private serviceUrl:   string ='https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

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

  this.http.get(`${this.serviceUrl}/search`, {params}) // Se puede reducir
  .subscribe(resp => {
    console.log(resp);
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
