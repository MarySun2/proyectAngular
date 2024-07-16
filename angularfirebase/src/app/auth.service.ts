import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}

  async register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
