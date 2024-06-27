import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: [ './avatar.component.scss' ]
})
export class AvatarComponent {
  @Input() userInfo!: any;

  _class: string = this.userInfo?.role === 'ADMIN' ? 'admin' : (this.userInfo?.role == 'SALE' ? 'sale' : '');

  getStyle() {
    return {
      border: this.userInfo?.role === 'ADMIN' ? '2px solid cyan' : '2px solid yellow'
    };
  }
  constructor() {}
}