import { Injectable } from "@angular/core";
import { v4 as uuid} from "uuid";
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

    public characters: Character[]= [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500,
  }];

  addCharacter(character: Character): void {
    // console.error('MainPage');
    // console.warn(Character);
    //this.characters.push(Character);
    const newCharacter: Character = {id: uuid(), ...character} // para todo los characteres name y power incluye id

    this.characters.push(newCharacter);
  }

  //borra sin un id unico
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index,1);
  // }

  // Borra con id unico
  deleteCharacterById(id:string) {
    this.characters = this.characters.filter (character => character.id !== id);
  }

}
