import { Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/countryLayout/countryLayout.component';
import { ByCountryPageComponent } from './pages/by country-page/by country-page.component';
import { ByRegionPageComponent } from './pages/by region-page/by region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';



export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital', // Tambien podria aplicar una ruta basia
        component: ByCapitalPageComponent,
      },

      {
        path: 'by-country', // Tambien podria aplicar una ruta basia
        component: ByCountryPageComponent,
      },

      {
        path: 'by-region', // Tambien podria aplicar una ruta basia
        component: ByRegionPageComponent,
      },

      //Ruta Dinamica
      {
        path: 'by/:code',
        component: CountryPageComponent,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
