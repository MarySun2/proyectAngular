import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
 template: `

 <section [ngClass]="['w-full h-[2000px]', cssClass]">

      <ng-content/>  <!-- desde padre puede heredar los componentes hijos     -->
    </section>

  `
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!:string;

  constructor(){
    console.log('Heavy Fast creado');
  }
 }
