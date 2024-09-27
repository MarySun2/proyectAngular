import { Component } from '@angular/core'; // Importa el decorador Component de Angular.
import { Gif } from '../../interfaces/gifs.interfaces'; // Importa la interfaz Gif para definir el tipo de datos.
import { GifsService } from '../../services/gifs.service'; // Importa el servicio GifsService para gestionar la lógica de negocio.

@Component({
  selector: 'gifs-home-page', // Selector del componente, que se usará en la plantilla HTML.
  templateUrl: './home-page.component.html', // Ruta al archivo de plantilla HTML del componente.
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {} // Inyección del servicio GifsService a través del constructor.

  // Getter que obtiene la lista de GIFs del servicio.
  get gifs(): Gif[] {
    return this.gifsService.gifList; // Devuelve la lista de GIFs mantenida en el servicio.
  }
}

