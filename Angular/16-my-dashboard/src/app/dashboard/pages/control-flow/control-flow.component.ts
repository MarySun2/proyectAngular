import { Component, signal } from '@angular/core';

type Grade = 'A'| 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  //Propiedad
  public showContent = signal (false);//.asReadonly; // no podria cambiar el valor
  public grade = signal<Grade>('A');

  // Metodo
  public toggleContent () {
    this.showContent.update( value => !value );
  }
}
