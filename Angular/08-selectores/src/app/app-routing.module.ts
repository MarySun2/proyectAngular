import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'selector',
    //loadChildren: lazyLoad
  },

  {
    path: '**',
    redirectTo: 'selector',
    pathMatch: 'full'  // Si no encuentra la ruta, redirige a la ruta por defecto (selector)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
