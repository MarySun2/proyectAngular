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
public isLoading: boolean = false;

// Se Inyecta el servicio
constructor(private countriesService: CountriesService) {}

searchRegion(region: string): void {

  this.isLoading = true;

  this.countriesService.searchRegion(region)
  .subscribe(countries => {
    this.countries = countries;
    this.isLoading = false;
  });
}
}
