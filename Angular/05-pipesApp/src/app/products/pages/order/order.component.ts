import { Component } from '@angular/core';
import { Color, Hero, TableColumn } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'prod-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  // Propiedad
  public isUpperCase: boolean = false;

  //Fracmento de la tabla mas complejo hecho por IA
  public cols: TableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'canFly', header: 'Can Fly' },
    { field: 'color', header: 'Color' }
  ];


  public heroes: Hero[] = [
  {
    name: 'Superman',
    canFly: true,
    color: Color.blue,
  },

  {
    name: 'Batman',
    canFly: false,
    color: Color.black,
  },

  {
    name: 'Daredevil',
    canFly: false,
    color: Color.red,
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.red,
  },
  {
    name: 'Linterna Verde',
    canFly: true,
    color: Color.green,
  },
]

  //Metodo
  toggleUpperCase(): void {
    this.isUpperCase =!this.isUpperCase; // Cambia el estado de la propiedad isUpperCase

  }

  // para el Save funcionando del p-splitButton (toggle )
//   items: any[] = [];

// ngOnInit() {
//   this.items = [
//     { label: 'Update', icon: 'pi pi-refresh', command: () => {
//         // Acción para 'Update'
//         console.log('Actualizado');
//     }},
//     { label: 'Delete', icon: 'pi pi-times', command: () => {
//         // Acción para 'Delete'
//         console.log('Eliminado');
//     }},
//     { label: 'Reactivate', icon: 'pi pi-check', command: () => {
//         // Acción para 'Reactivate'
//         console.log('Reactivado');
//     }}
//   ];
// }

// // Definición de las columnas
// cols: any[] = [
//   { field: 'name', header: 'Name' },
//   { field: 'price', header: 'Price' },
//   { field: 'category', header: 'Category' }
// ];

// // Definición de los productos
// products: any[] = [
//   { name: 'Product 1', price: 100, category: 'Category 1' },
//   { name: 'Product 2', price: 200, category: 'Category 2' },
//   { name: 'Product 3', price: 300, category: 'Category 3' }
// ];



}
