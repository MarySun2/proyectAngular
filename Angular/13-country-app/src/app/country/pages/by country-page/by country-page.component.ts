import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/search-input/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-country-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by country-page.component.html',
})
export class ByCountryPageComponent {

  //injectar el servicio
  countryService =inject (CountryService);
  //Otra Forma de hacerlo
  query = signal('');

  countryResource = resource ({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {

      if (!request.query ) return [];

      return await firstValueFrom (
        this.countryService.searchByCountry(request.query)
      )

    }
  })
}
