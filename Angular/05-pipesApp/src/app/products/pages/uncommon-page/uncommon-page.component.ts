import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  // parecido a el if y else
  public invitationMap = {
    'male': 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }
}
