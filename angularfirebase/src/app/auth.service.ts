import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';
import { FireDbService } from './fire-db.service'; // Asegúrate de importar FireDbService

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';
  authUser = null;

  constructor(
    public auth: AngularFireAuth, 
    private router: Router,
    private fireDbService: FireDbService // Inyecta FireDbService
  ) {}

  user = this.auth.authState.pipe(
    map(authState => { 
      console.log('authState: ', authState);
      if (authState) {
        this.authUser = authState;
        return authState;
      } else {
        return null;
      }
    })
  );

  login() {
    console.log('login!');
    return this.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(userCredential => {
        console.log('user logado con email: ', userCredential.user);
        this.email = '';
        this.pass = '';
        this.authUser = userCredential.user;
        if (userCredential.user) {
          this.fireDbService.updateUserData(userCredential.user); // Usa FireDbService aquí
        }
      });
  }

  glogin() {
    console.log('google login!');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) 
      .then(userCredential => {
        console.log('User logueado: ', userCredential.user);
        this.email = '';
        this.pass = '';
        this.authUser = userCredential.user;
        if (userCredential.user) {
          this.fireDbService.updateUserData(userCredential.user); // Usa FireDbService aquí
        }
        // Lógica adicional después del inicio de sesión
      })
      .catch(error => {
        console.log('Error en Google login: ', error);
      });
  }

  logout() {
    console.log('logout!');
    this.auth.signOut();
    this.email = '';
    this.pass = '';
    this.router.navigate(['/']);
  }
}

