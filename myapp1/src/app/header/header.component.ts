

import { Component} from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  // Corregido a styleUrls
})
export class HeaderComponent  
{
  pageTitle ='MY APP';
  constructor() {}

  // Resivir el parametro
    OnDataCheck(e: any) {
      console.log(e);
    }
}

