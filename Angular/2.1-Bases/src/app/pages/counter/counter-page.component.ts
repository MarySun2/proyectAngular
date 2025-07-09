import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  // template:`
  // <h1>Counter: {{ counter }}</h1>
  // <button (click)="increaseBy(1)">+1</button>
  // <button (click)="increaseBy(-1)">-1</button>
  //  <button (click)="resetCounter()">Reset</button>
  // `,
  templateUrl:'./counter-page.component.html',

  styles: `
  button {
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
  }
`,

//changeDetection: ChangeDetectionStrategy.OnPush, // Mejora el performar de eventos

})
export class CounterPageComponent {
//Propiedad
  counter = 10;
  //Señales
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update((v) => v + 1);
      // this.increaseBy(1);
      // this.counter += 1;
      console.log('Tick')
    },2000);
  }
//Metodo
  increaseBy(value:number){
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
