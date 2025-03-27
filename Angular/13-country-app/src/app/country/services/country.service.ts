import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { Country } from '../interfaces/country.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //injectable el servicio
  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<Country[]>
  {
    const url = `${API_URL}/capital/${query}`;

    query =query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
    .pipe(
      map( (resCountries) =>
        CountryMapper.mapRestCountryArrayToCountryArray(resCountries)),
      catchError(error =>{
        console.log('Error exception', error);

        return throwError(() => new Error(`No se pudo obtener paises con ese query ${ query }`)
        );
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]>
  {
    query =query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)

    .pipe(
      map( (resCountries) =>
        CountryMapper.mapRestCountryArrayToCountryArray(resCountries)),
      catchError(error =>{
        console.log('Error exception', error);

        return throwError(() => new Error(`No se pudo obtener paises con ese query ${ query }`)
        );
      })
    );
  }
}
