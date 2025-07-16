import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  standalone: true,
  imports: [],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  //Metodo
  addCharacter() {
    // console.log(this.name(), this.power() );
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    // Agrego el nuevo Caracter
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  }

  // pulgarlo
  resetField() {
    this.name.set('');
    this.power.set(0);
  }
 }

