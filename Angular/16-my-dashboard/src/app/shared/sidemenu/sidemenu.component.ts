import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
   public menuItem = routes
    .map( route => route.children ?? [] )
    .flat() // Aplana
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoutes = routes
    // .map( route => route.children ?? [] )
    // .flat() // Aplana
    // .filter( route => route && route.path )
    // .filter( route => !route.path?.includes(':') )
    // console.log(dashboardRoutes);
  }
}
