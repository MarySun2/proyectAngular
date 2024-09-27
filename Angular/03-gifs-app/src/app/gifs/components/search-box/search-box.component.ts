import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box', // Define el selector del componente, que se utiliza en la plantilla HTML.
  templateUrl: './search-box.component.html', // Ruta a la plantilla HTML del componente.
})
export class SearchBoxComponent {

  // @ViewChild busca el elemento en la plantilla HTML con la referencia #txtTagInput y lo vincula a la propiedad 'tagInput'.
  // 'ElementRef' permite acceder directamente al elemento DOM, en este caso, el campo de entrada de texto (input).
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>; // Se espera que este sea un campo de texto HTML (input).

  // El servicio GifsService se inyecta a través del constructor. Este servicio contiene la lógica para buscar GIFs.
  constructor(private gifService: GifsService ) {}

  // Método que se ejecuta al hacer una búsqueda.
  // Se obtiene el valor del input a través de 'tagInput.nativeElement.value', se envía al servicio GifsService para buscar GIFs,
  // y luego se limpia el campo de texto.
  searchTag() {
    const newTag = this.tagInput.nativeElement.value; // Captura el valor del campo de entrada.
    console.log({ newTag }); // Muestra el valor capturado en la consola.

    // Llama al método 'searchTag' del servicio GifsService, que maneja la lógica de la búsqueda.
    this.gifService.searchTag(newTag);

    // Limpia el valor del campo de texto después de realizar la búsqueda.
    this.tagInput.nativeElement.value = '';
  }
}
