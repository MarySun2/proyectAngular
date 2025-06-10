import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A'| 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  //Propiedad
  public showContent = signal (false);//.asReadonly; // no podria cambiar el valor
  public grade = signal<Grade>('A');

  public frameworks = signal (['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal ([]);

  // Metodo
  public toggleContent () {
    this.showContent.update( value => !value );
  }
}
