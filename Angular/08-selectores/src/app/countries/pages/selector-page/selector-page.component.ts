import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap } from 'rxjs';



@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit {

  //No funciona
  // public myForm: FormGroup = this.fb.group({
  //   region: ['', Validators.required],
  //   country: ['', Validators.required],
  //   borders: ['', Validators.required],
  // })

  //Propiedades
  public countriesByRegion: SmallCountry[] = [];

  public myForm!: FormGroup; // Declara la variable sin inicializar

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ) {}

  //obtenerlo por getter
  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
   this.myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
   });

   this.onRegionChanged(); // Inicializar el evento cuando cambia la región
  }

  //Metodo

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges
   .pipe(
    switchMap ( region => this.countriesService.getCountriesByRegion(region)),
   )
   .subscribe( countries => {
    //  console.log({ region });
    this.countriesByRegion = countries;
   });
  }
}
