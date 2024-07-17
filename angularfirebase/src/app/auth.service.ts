import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) {}

  user = this.auth.authState.pipe(
    map(authState => { 
      console.log('authState: ', authState);
      if (authState) {
        return authState;
      } else {
        return null;
      }
    }))
  

  login() {
    console.log('login!');
    // Implementar lógica de inicio de sesión aquí si es necesario
  }

  glogin() {
    console.log('google login!');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) 
      .then(userCredential => {
        console.log('User logueado: ', userCredential);
        // Lógica adicional después del inicio de sesión
      })
      .catch(error => {
        console.log('Error en Google login: ', error);
      });
  }

  logout() {
    console.log('logout!');
    this.auth.signOut();
  }
}

