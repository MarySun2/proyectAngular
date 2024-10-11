import { Component } from '@angular/core';
import { Person } from '../../../../../../01-typescript-intro/src/topics/08-classes';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  // parecido a el if y else
  public invitationMap = {
    'male': 'invitarlo',
    'female' : 'invitarla'
  }

  // Metodo
  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melisa', 'Nataliad'];
  public clientsMap = {
    '=0' :'no tenemos ningun cliente esperando.',
    '=1' :'tenemos 1 cliente esperando.',
    '=2' :'tenemos 2 esperando',
    'other' :'tenemos # clientes esperando.',
  }

  // Metodo
  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value )),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data en la promesa.' );
    }, 3500);
  })

}
