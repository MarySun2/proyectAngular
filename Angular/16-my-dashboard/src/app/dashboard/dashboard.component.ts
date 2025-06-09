
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { routes } from '../app.routes';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {

  public MenuItem = routes
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
