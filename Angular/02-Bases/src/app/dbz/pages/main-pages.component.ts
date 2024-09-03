import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html',
  styleUrl: 'main-pages.component.css',
})
export class MainPageComponent {
  constructor(public DbzService: DbzService){};
}
