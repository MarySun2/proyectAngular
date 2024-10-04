import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
//Creo una propiedad
public countries: Country[] = [];
public regions: Region[] = ['Africa', 'America', 'Asia','Europe', 'Oceania'];
public selectedRegion?: Region;
public isLoading: boolean = false;

// Se Inyecta el servicio
constructor(private countriesService: CountriesService) {}

searchRegion(region: Region): void {

  this.isLoading = true;

  this.countriesService.searchRegion(region)
  .subscribe(countries => {
    this.countries = countries;
    this.isLoading = false;
  });
}
}
