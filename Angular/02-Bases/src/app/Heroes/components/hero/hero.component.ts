import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 30;

  get capitalizedName(): string {
    return  this.name.toUpperCase();
  }

  //Metodo
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    // throw 'Metodo por realizar';
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age =25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age =30;

    //Usando el DOM
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    //document.querySelectorAll('h1')!.forEach(element =>{
      //element.innerHTML = '<h1>Desde Angular</h1>';
    //})
  }
}
