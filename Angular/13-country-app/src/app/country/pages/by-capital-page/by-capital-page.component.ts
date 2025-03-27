import {Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from '../../components/search-input/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent {

  //injectar el servicio
  countryService =inject (CountryService);
  //Otra Forma de hacerlo
  query = signal('');

  //Ejemplo con observable
  countryResource = rxResource ({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {

      if (!request.query ) return of([]);

      return this.countryService.searchByCapital(request.query)
    }
  })

  //Ejemplo de Promesas
  // countryResource = resource ({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {

  //     if (!request.query ) return [];

  //     return await firstValueFrom (
  //       this.countryService.searchByCapital(request.query)
  //     )

  //   }
  // })

  // Version 18 una forma de hacerlo
  // isLoading = signal(false)
  // isError = signal<string|null>(null)
  // countries = signal<Country[]>([]);

  //  onSearch(query: string) {
  //   if ( this.isLoading() ) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //   .subscribe({
  //     next: ( countries ) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },

  //     error: (error) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(error);
  //     },
      // const c = CountryMapper.mapRestCountryArrayToCountryArray(countries)
      // console.log(c);

    }


