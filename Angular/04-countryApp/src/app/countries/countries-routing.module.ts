import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

// Definición de las rutas para el módulo de países
const routes: Routes = [
  {
    path: 'by-capital', // Ruta para buscar países por capital
    component: ByCapitalPageComponent,
  },

  {
    path: 'by-country', // Ruta para buscar países por nombre
    component: ByCountryPageComponent,
  },

  {
    path: 'by-region', // Ruta para buscar países por región
    component: ByRegionPageComponent,
  },

  {
    path: 'by/:id', // Ruta para mostrar detalles de un país específico
    component: CountryPageComponent,
  },

  {
    path: '**', // Ruta comodín que redirige a la página por capital si no se encuentra ninguna coincidencia
    redirectTo: 'by-capital'
  }
];

// Decorador NgModule para configurar el módulo de rutas
@NgModule({
  imports: [
    RouterModule.forChild(routes) // Configura las rutas para el módulo hijo
  ],
  exports: [
    RouterModule, // Exporta el RouterModule para que esté disponible en otros módulos
  ]
})
export class CountriesRoutingModule { }

