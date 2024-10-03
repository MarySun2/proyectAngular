// Importaciones necesarias desde el núcleo de Angular y el módulo de enrutamiento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importación de los componentes que se utilizarán en las rutas
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

// Definición de las rutas del módulo principal de la aplicación
const routes: Routes = [
  // Ruta comentada para la página de inicio (Home)
  // Esta ruta era la raíz de la aplicación y mostraba el componente HomePageComponent
  // {
  //   path: '',
  //   component: HomePageComponent
  // },

  // Ruta para la página "About" (Acerca de nosotros)
  {
    path: 'about', // URL que activa esta ruta: /about
    component: AboutPageComponent // Componente que se mostrará cuando el usuario navegue a /about
  },

  // Ruta para la página de "Contact" (Contacto)
  {
    path: 'contact', // URL que activa esta ruta: /contact
    component: ContactComponent // Componente que se mostrará cuando el usuario navegue a /contact
  },

  // Ruta para la sección de "Countries" (Países)
  {
    path: 'countries', // URL que activa esta ruta: /countries
    // Carga diferida (Lazy Loading) del módulo CountriesModule para optimizar el rendimiento
    loadChildren: () => import('./countries/countries.module').then(module => module.CountriesModule)
  },

  // Ruta comodín (Wildcard)
  {
    path: '**', // Coincide con cualquier ruta no definida previamente
    redirectTo: 'countries' // Redirecciona a /countries si el usuario ingresa una ruta inexistente
  }
];

// Decorador @NgModule para definir el módulo de enrutamiento de la aplicación
@NgModule({
  imports: [
    // Se configura el RouterModule con las rutas definidas arriba
    RouterModule.forRoot(routes), // forRoot se usa para configurar el enrutamiento en el módulo principal de la aplicación
  ],
  exports: [
    RouterModule, // Se exporta RouterModule para que pueda ser utilizado en otros módulos de la aplicación
  ]
})
// Clase que define el módulo de enrutamiento principal
export class AppRoutingModule { }
