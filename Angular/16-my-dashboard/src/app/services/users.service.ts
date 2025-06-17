import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';


interface state {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Señal # simboliza una propiedad privada  o usas private state
  #statte = signal <state>({
    loading: true,
    users: [],
  });

  constructor() {
    console.log('Cargando Data')
   }

}
