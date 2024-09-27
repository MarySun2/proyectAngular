// Importa el decorador Component desde Angular core y el servicio GifsService.
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

// Decorador que define un componente Angular.
@Component({
  selector: 'shared-sidebar', // Selector que se utiliza para insertar este componente en una plantilla.
  templateUrl: './sidebar.component.html', // Ruta al archivo HTML de la plantilla del componente.
  styleUrl: './sidebar.component.css' // Ruta al archivo CSS del componente.
})
// Clase del componente SidebarComponent.
export class SidebarComponent {

  // Inyecta el servicio GifsService a través del constructor.
  constructor(private gifService: GifsService) {}

  // Propiedad getter que retorna el historial de etiquetas del servicio de GIFs.
  get tags(): string[] {
    return this.gifService.tagsHistory; // Retorna un arreglo de etiquetas.
  }

  // Método que se encarga de buscar una etiqueta a través del servicio GifsService.
  searchTag(tag: string): void {
    this.gifService.searchTag(tag); // Llama al método searchTag del servicio con la etiqueta proporcionada.
  }
}

