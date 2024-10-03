import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

// Decorador que define al componente de Angular
@Component({
  selector: 'countries-by-country-page', // Selector para utilizar este componente en plantillas HTML
  templateUrl: './by-country-page.component.html', // Ruta del archivo HTML asociado al componente
  styles: `` // Estilos específicos para este componente (vacío en este caso)
})
export class ByCountryPageComponent {

  // Propiedad que almacena la lista de países obtenidos
  public countries: Country[] = [];

  // Constructor que inyecta el servicio CountriesService
  constructor(private countriesService: CountriesService) {}

  /**
   * Método para buscar países según el término de búsqueda ingresado.
   * @param term - El término de búsqueda ingresado por el usuario
   */
  searchCountry(term: string): void {
    // Se llama al servicio para buscar países por el nombre ingresado.
    // El resultado de la búsqueda se suscribe y se asigna a la propiedad 'countries'.
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries; // Almacena los países encontrados en la propiedad 'countries'
      });
  }
}

