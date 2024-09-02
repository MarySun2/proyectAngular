import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/counter/counter.component";





@NgModule({
  exports:[CounterComponent
  ],
  declarations: [
   CounterComponent
  ],

})
export class CounterModule {

}
