// Importaciones necesarias para crear el componente y para recibir datos del componente padre
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

// Decorador @Component que define el comportamiento y las propiedades del componente
@Component({
  selector: 'countries-table', // Selector que se usa para insertar este componente en el HTML de otros componentes
  templateUrl: './country-table.component.html', // Ruta del archivo de la plantilla HTML que define la vista de este componente
  styles: [
    // Estilos CSS específicos del componente
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  // Decorador @Input() para recibir datos desde el componente padre
  // 'countries' es un array de objetos tipo 'Country' que se muestra en la tabla
  @Input()
  public countries: Country[] = [];
}

