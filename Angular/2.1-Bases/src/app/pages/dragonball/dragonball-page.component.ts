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
 }
