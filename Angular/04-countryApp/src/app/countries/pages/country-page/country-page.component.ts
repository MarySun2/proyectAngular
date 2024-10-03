import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

// Decorador que define al componente de Angular
@Component({
  selector: 'countries-country-page', // Selector para usar este componente en plantillas HTML
  templateUrl: './country-page.component.html', // Ruta del archivo HTML asociado al componente
  styles: `` // Estilos específicos para este componente (vacío en este caso)
})
export class CountryPageComponent implements OnInit {

  // Propiedad que almacenará la información del país seleccionado
  public country?: Country;

  // Constructor que inyecta dependencias
  constructor(
    private activatedRoute: ActivatedRoute, // Servicio para acceder a los parámetros de la ruta activa
    private router: Router, // Servicio para navegar entre rutas
    private countriesService: CountriesService, // Servicio para acceder a la lógica de negocio relacionada con los países
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Se suscribe a los parámetros de la ruta activa
    this.activatedRoute.params
      .pipe(
        // Usa switchMap para cambiar de un observable de parámetros a un observable de país
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        // Si no se encuentra el país, redirige a la ruta base
        if (!country) {
          return this.router.navigateByUrl('');
        }
        // Si se encuentra un país, se asigna a la propiedad 'country'
        return this.country = country;
      });
  }
}
