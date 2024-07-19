import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';
  

  constructor(public auth: AngularFireAuth, 
              private router: Router,
              private db: AngularFireDatabase) {}

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
      return this.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then( userCredential => {
        console.log('user logado con email: ', userCredential.user);
        this.email = '';
        this.pass = '';
        this.updateUserData(userCredential.user);
      })
    }

  glogin() {
    console.log('google login!');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) 
      .then(userCredential => {
        console.log('User logueado: ', userCredential.user);
        this.email = '';
        this.pass = '';
        this.updateUserData(userCredential.user);
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

  updateUserData(user: any) {
    console.log('user: ', user);
    const path = `users/${user.uid}`;
    const u = {
      email: user.email
    }
    this.db.object(path).update(u).catch(error => console.log(error));
  }
}

