import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

// se puede hacer esto creando un archivo json y creando una interface
const client1 = {
  name:'Fernando',
  gender: 'male',
  age: 29,
  address: 'Ottawa, Canada',
  occupation: 'Developer',
};

const client2 = {
  name:'Melissa',
  gender: 'female',
  age: 36,
  address: 'London, UK',
  occupation: 'UX Designer',
};

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {


  client = signal (client1);

   //i18n Select
   invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
   };


  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //I18n Plural
  clientsMap = signal ({
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos 1 cliente esperando',
    '=2' : 'tenemos 2 esperando',
    'other' : 'tenemos # clientes esperando',
  });

  clients = signal ([
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melisa',
    'Nataliad',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
    occupation: 'Arquitect',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('promesa finalizada');
    }, 3500);
  });
}
