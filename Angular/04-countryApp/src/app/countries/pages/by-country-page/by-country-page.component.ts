import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
//Creo una propiedad
public countries: Country[] = [];

// Se Inyecta el servicio
constructor(private countriesService: CountriesService) {}

searchCountry(term: string): void {
  this.countriesService.searchCountry(term)
  .subscribe(countries => {
    this.countries = countries;
  });
}

}
