import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})

export class CountryPageComponent implements OnInit  {

  constructor(
    //injeccion
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
  ) {}

  // implementacion del OnInit
  ngOnInit(): void {
    this.activatedRoute.params
    // .subscribe((params: any) => {
      .subscribe(({id}) => {

      this.countriesService.searchCountryByAlphaCode( id )
      .subscribe( country => {
        console.log( {country})
      });
    });
  }
}
