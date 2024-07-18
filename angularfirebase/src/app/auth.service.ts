import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';
  

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
  

    login(){
      console.log('login!');
      this.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then( user => {
        console.log('user logado con email: ', user);
        this.email = '';
        this.pass = '';
      })
      .catch( error => {
        //console.log('error en email login: ', error);
        console.log('Error Code:', error.code);
        if (error.code === 'auth/wrong-password') {
          alert('Contraseña no válida');
        } else if (error.code === 'auth/invalid-email') {
          alert('Formato de email no válido');
        } else {
          alert('Error en el inicio de sesión con Google');
        }
      });
    }

  glogin() {
    console.log('google login!');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) 
      .then(userCredential => {
        console.log('User logueado: ', userCredential);
        this.email = '';
        this.pass = '';
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

