import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Propiedad
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;


  //Metodo
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }
}
