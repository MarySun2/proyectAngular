import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FirestorageService } from '../firestorage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

    //Otra forma de usar el routing creamos un boton para direccionarlo a home

    constructor (private router: Router,
                public firestorage: FirestorageService){}

    ngOnInit() {
    }

    goHome() {
      this.router.navigate(['/']);
    }

}
