import { Routes } from '@angular/router';
import { Component } from '@angular/core';


export const routes: Routes = [

  {
    path: 'dashboard',

    //Una forma de hacerlo
    // loadComponent: () => import ('./gifs/pages/dashboard-page/dashboard-page.component').then (
    //   (c) => c.DashboardPageComponent
    // ),
    //Segunda forma de hacerlo
    loadComponent: () =>
       import ('./gifs/pages/dashboard-page/dashboard-page.component'),
  },

  {
    path: 'trending',
    loadComponent: () =>
       import ('./gifs/pages/trending-page/trending-page.component'),
  },


  {
    path: 'search',
    loadComponent: () =>
       import ('./gifs/pages/search-page/search-page.component'),
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
