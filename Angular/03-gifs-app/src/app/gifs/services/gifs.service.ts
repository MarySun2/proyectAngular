import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];

  constructor() { }

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
     const regex = /^[a-zA-Z]+$/;
     if (!regex.test(tag)) {
       console.log('No se permiten números en el tag.');
       return; // Sale del método si el tag contiene números
     }

  this.organizeHistory(tag);

  console.log(this._tagsHistory);
  }
}
