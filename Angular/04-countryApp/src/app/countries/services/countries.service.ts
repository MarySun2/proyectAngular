import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

// Decorador Injectable que permite la inyección de este servicio en otros componentes o servicios
@Injectable({
  providedIn: 'root' // Este servicio estará disponible en toda la aplicación
})
export class CountriesService {

  // URL base de la API de países
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore ={
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  // Inyección del servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) {}

  private getCountriesRequest( url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])), // Captura cualquier error y devuelve null
      //delay(2000), // Retraza el tiempo de la consulta
    );
  }

  // Método para buscar un país por su código alfa
  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${code}`; // Construye la URL para la solicitud

    return this.http.get<Country[]>(url) // Realiza la solicitud GET
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null), // Mapea la respuesta para obtener el primer país o null
        catchError(error => of(null)) // Captura cualquier error y devuelve null
      );
  }

  // Método para buscar países por capital
  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`; // Construye la URL para la solicitud
    return this.getCountriesRequest(url);
  }

  // Método para buscar países por nombre
  searchCountry(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`; // Construye la URL para la solicitud
    return this.getCountriesRequest(url);
  }

  // Método para buscar países por región
  searchRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`; // Construye la URL para la solicitud
    return this.getCountriesRequest(url);
  }
}


