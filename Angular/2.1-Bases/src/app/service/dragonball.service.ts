import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];

};

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  //characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 9000 },
  // ]);

  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(character: Character) {
    this.characters.update(
      list =>[...list, character]
    )
  }

  savesToLocalStorage = effect(() =>{
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

}
//DI  trabaja como siguenton
