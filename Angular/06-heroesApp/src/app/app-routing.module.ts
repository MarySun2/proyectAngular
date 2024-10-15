import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
 {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
 },

 {
  path: 'heroes',
  loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
 },

 {
  path: '404',
  component: Error404PageComponent
 },

{
  path: '',
  redirectTo: 'heroes',
  pathMatch: 'full' // redirecciona a heroes si el usuario ingresa la raíz de la aplicación sin especificar una rutaa
},
{
  path: '**',
  redirectTo: '404' // redirecciona a 404 si el usuario ingresa una ruta no especificada previamente.
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
