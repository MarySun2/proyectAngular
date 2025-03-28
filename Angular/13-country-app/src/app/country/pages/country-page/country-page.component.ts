import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryInformationComponent } from './country-information/country-information.component';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';


@Component({
  selector: 'country-page',
  standalone: true,
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryCode = inject (ActivatedRoute).snapshot.params['code'];
  countryService = inject (CountryService);

  countryResource = rxResource({
    request: () => ({code: this.countryCode}),
    loader: ({ request }) => {
      return this.countryService.searchCountryByAlphaCode(request.code)
    },

  });
}
