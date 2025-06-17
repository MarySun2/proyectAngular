import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

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

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    //Creas el api key para que pueda funcionar
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

 this.http.get<UsersResponse>('https://reqres.in/api/users', {headers})
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data,
        })

      });
  }

}
