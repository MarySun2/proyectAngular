import { Component } from '@angular/core';

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
}
