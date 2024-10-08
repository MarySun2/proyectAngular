import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = []; // Inicializamos la lista de elementos del menú
  public items: MenuItem[] = []; // Declaramos la lista de elementos 'items'

  ngOnInit() {
    // Inicializamos el menú principal
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          }
        ]
      }
    ];
  }
}

