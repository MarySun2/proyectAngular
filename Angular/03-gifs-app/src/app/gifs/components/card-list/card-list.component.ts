import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list', // Define el selector del componente, que se utilizará en las plantillas HTML.
  templateUrl: './card-list.component.html', // Ruta de la plantilla HTML asociada con este componente.
})
export class CardListComponent {

  // Decorador @Input permite que el componente padre pase una lista de GIFs al componente hijo.
  // 'gifs' es un array de objetos de tipo 'Gif' que se inicializa como un array vacío.
  @Input()
  public gifs: Gif[] = [];
}
