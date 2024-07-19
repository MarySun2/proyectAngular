import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase) { }

  updateUserData(user: { uid: string, email: string | null }) {
    console.log('user: ', user);
    const path = `users/${user.uid}`;
    const u = {
      email: user.email
    };
    this.db.object(path).update(u).catch(error => console.log(error));
  }

  getUsers() { // No requiere userUid
    const path = `users`; // Cambiado para obtener todos los usuarios
    return this.db.list(path).snapshotChanges();
  }

  removeUser(userUid: string) { // Define el tipo para userUid
    const path = `users/${userUid}`; // Corrige el path
    return this.db.object(path).remove();
  }
}
