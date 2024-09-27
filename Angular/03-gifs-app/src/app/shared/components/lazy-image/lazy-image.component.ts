import { Component, Input, OnInit } from '@angular/core'; // Importa los decoradores y tipos necesarios de Angular.
import { timeout } from 'rxjs'; // (No se utiliza en este componente, puede eliminarse.)

@Component({
  selector: 'shared-lazy-image', // Define el selector del componente para usar en las plantillas.
  templateUrl: './lazy-image.component.html', // Especifica la ruta del archivo de plantilla HTML.
})
export class LazyImageComponent implements OnInit  { // Declara la clase del componente que implementa OnInit.

  @Input() // Decorador que indica que esta propiedad se puede recibir desde un componente padre.
  public url!: string; // Propiedad que contendrá la URL de la imagen que se cargará.

  @Input() // Decorador que indica que esta propiedad se puede recibir desde un componente padre.
  public alt: string = ''; // Propiedad que contendrá el texto alternativo de la imagen, por defecto vacío.

  public hasLoaded: boolean = false; // Propiedad que indica si la imagen se ha cargado.

  ngOnInit(): void { // Método del ciclo de vida que se ejecuta al inicializar el componente.
    if (!this.url) throw new Error('URL property is required'); // Lanza un error si no se proporciona la URL.
  }

  onLoad(): void { // Método que se ejecuta cuando la imagen se ha cargado.
    console.log('Image loaded'); // Muestra un mensaje en la consola.

    setTimeout(() => { // Crea un retraso antes de cambiar el estado de 'hasLoaded'.
      this.hasLoaded = true; // Cambia 'hasLoaded' a verdadero, indicando que la imagen se ha cargado.
    }, 1000); // Retraso de 1000 ms (1 segundo).
  }

}
