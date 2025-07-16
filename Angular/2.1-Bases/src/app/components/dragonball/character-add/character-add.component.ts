import { Component, input, signal } from '@angular/core';
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

addCharacter() {
    // console.log(this.name(), this.power() );
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    // Agrego el nuevo Caracter
    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);
    console.log({newCharacter});
    this.resetField();
  }

  // pulgarlo
  resetField() {
    this.name.set('');
    this.power.set(0);
  }


}
