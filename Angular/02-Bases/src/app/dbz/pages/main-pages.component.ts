import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html',
  styleUrl: 'main-pages.component.css',
})
export class MainPageComponent {

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
    console.error('MainPage');
    console.warn(Character);
  }
}
