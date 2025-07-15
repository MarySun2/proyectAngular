import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [
            //NgClass
           ],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Pikoro', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  //clase computada
  // powerClasses = computed( () => {
  //   return{
  //     'text-danger': true,
  //   };
  // });

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
