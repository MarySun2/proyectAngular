import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  standalone: true,
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  // El cual emite algo
  newCharacter = output<Character>();

  //metodo
addCharacter() {
    // console.log(this.name(), this.power() );
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    // Agrego el nuevo Caracter
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };


    this.newCharacter.emit(newCharacter);
    this.resetField();
  }

  // pulgarlo
  resetField() {
    this.name.set('');
    this.power.set(0);
  }

}
