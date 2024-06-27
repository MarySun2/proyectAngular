

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TitleComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle = 'MY APP';

  userInfo = {
    image: '../../assets/imagen/YO.png',
    role: 'USER'
  };

  constructor() {}

  OnDataCheck(e: any) {
    console.log(e);
  }
}


