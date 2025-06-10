import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal (false);//.asReadonly; // no podria cambiar el valor

  // Metodo
  public toggleContent () {
    this.showContent.update( value => !value );
  }
}
