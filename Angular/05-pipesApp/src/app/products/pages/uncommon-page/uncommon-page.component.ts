import { Component } from '@angular/core';

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
}
