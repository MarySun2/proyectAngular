import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

    //Otra forma de usar el routing creamos un boton para direccionarlo a home

    constructor (private router: Router){}

    ngOnInit() {
    }

    goHome() {
      this.router.navigate(['/']);
    }

}
