import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Injectable({
  providedIn: 'root'
})
export class DbzService {

    public characters: Character[]= [{
    name:'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:'Vegeta',
    power: 7500,
  }];

  onNewCharacter(Character: Character): void {
    // console.error('MainPage');
    // console.warn(Character);
    this.characters.push(Character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }

}
