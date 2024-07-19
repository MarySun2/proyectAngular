import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta para el componente Home
  { path: 'settings', component: SettingsComponent },  // Ruta para el componente Settings
  {path: 'users', component: UsersComponent}
];

