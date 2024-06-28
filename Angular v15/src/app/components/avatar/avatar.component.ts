import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <img 
      class="avatar"
      [ngClass]="userInfo.role === 'ADMIN' ? 'admin' : userInfo.role === 'SALES' ? 'sales' : ''" 
      [src]="userInfo.image"
      [ngStyle]="{'border': userInfo.role === 'ADMIN' ? '2px solid cyan': '2px solid yellow'}"
    >
  `,
  styles: [
    `.avatar { height: 50px; width: 50px; padding: 5px}`,
    `.admin { height: 50px; width: 50px; padding: 5px; border-radius: 100%; }`,
    `.sales { height: 50px; width: 50px; padding: 5px; border-radius: 18px; }`,
  ]
})
export class AvatarComponent {

  @Input() userInfo: any;

}
