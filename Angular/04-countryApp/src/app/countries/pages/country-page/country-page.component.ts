import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})

export class CountryPageComponent implements OnInit  {

  //propiedad
  public country?: Country;

  constructor(
    //injeccion
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  //1. forma de hacerlo
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //   // .subscribe((params: any) => {
  //     .subscribe(({id}) => {

  //     this.countriesService.searchCountryByAlphaCode( id )
  //     .subscribe( country => {
  //       console.log( {country})
  //     });
  //   });
  // }
  // 2. forma de hacerlo
  // implementacion del OnInit y un observable held
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //   // .subscribe((params: any) => {
  //     .subscribe(({id}) => {

  //     this.countriesService.searchCountryByAlphaCode( id )
  //     .subscribe( country => {
  //       console.log( {country})
  //     });
  //   });
  // }

  // 3. forma de hacerlo
  ngOnInit(): void {
    this.activatedRoute.params

    .pipe(
      switchMap (({id}) => this.countriesService.searchCountryByAlphaCode( id )),
    )

      .subscribe( country => {

        if ( !country ) {
          return this.router.navigateByUrl('');
        }
        // console.log('TENEMOS UN PAIS');
        return this.country = country;
        return;
      });

  }
}
