import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {

  private router = inject(Router);

  currentRoute = signal(this.router.url);

  // Escucha cambios en la ruta
  constructor() {
    this.router.events.subscribe(() => {
    this.currentRoute.set(this.router.url);
    });
  }

  pageTitle = computed(() => {
    const url = this.currentRoute();
    if (url.includes('register')) return 'Registro';
    return 'Autenticación';
  });
}
