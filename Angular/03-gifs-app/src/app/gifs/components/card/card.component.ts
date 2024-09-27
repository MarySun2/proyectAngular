import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card', // Define el selector del componente, que se utilizará en las plantillas HTML
  templateUrl: './card.component.html', // La ubicación de la plantilla HTML del componente
})
export class CardComponent implements OnInit {

  // El decorador @Input permite que el componente padre le pase datos al hijo.
  // En este caso, se espera que el componente padre le pase un objeto del tipo 'Gif' al componente 'gifs-card'.
  @Input()
  public gif!: Gif; // Se usa el operador '!' para indicar que gif es requerido y no puede ser indefinido.

  // Hook del ciclo de vida de Angular que se ejecuta cuando el componente es inicializado.
  // En este método se valida que la propiedad gif haya sido pasada correctamente. Si no, lanza un error.
  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is required'); // Si 'gif' no se proporciona, se lanza un error
    }
  }
}

