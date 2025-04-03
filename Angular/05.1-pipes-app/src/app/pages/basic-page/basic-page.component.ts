import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower= signal ('fernando');
  nameUpper= signal ('FERNANDO');
  fullName= signal ('fErNando HeRRerA');

  customDate = signal (new Date());

  tickingDateEffect = effect((onCleanup) =>{
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tic');
    },1000);

  onCleanup(() => {
    clearInterval(interval);
  });
});
}
