import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UsersResponse, UserResponse1 } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

   //Creas el api key para que pueda funcionar
    private headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {

 this.http.get<UsersResponse>('https://reqres.in/api/users', {headers: this.headers})
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data,
        })

      });
  }

  // metodo
  getUserById( id: string ){

 return this.http.get<UserResponse1>(`https://reqres.in/api/users/${id}`, {headers: this.headers})
      .pipe(
        delay(1500),
        map( resp => resp.data )
      )
  }
}
