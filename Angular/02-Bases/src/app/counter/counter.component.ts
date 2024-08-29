import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter</h2>
<hr>
<h3>Counter: {{counter}}</h3>
  <!-- Botones -->
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent {
  public title: string = 'Mi primera app Angular';
  public counter :number = 10;

  increaseBy(value:number) :void {
    //this.counter += 1 o -=1
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
