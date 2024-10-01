import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
//Creo una propiedad
public countries: Country[] = [];

// Se Inyecta el servicio
constructor(private countriesService: CountriesService) {}

searchRegion(term: string): void {
  this.countriesService.searchRegion(term)
  .subscribe(countries => {
    this.countries = countries;
  });
}
}
