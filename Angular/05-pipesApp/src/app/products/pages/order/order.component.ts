import { Component } from '@angular/core';

@Component({
  selector: 'prod-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  // Propiedad
  public isUpperCase: boolean = false;

  //Metodo
  toggleUpperCase(): void {
    this.isUpperCase =!this.isUpperCase; // Cambia el estado de la propiedad isUpperCase

  }

  // para el Save funcionando del p-splitButton
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

}
