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
  searchTag(tag:string) : void {
  this._tagsHistory.unshift(tag);// quiero añadir al inicio

  console.log(this._tagsHistory);
  }
}
