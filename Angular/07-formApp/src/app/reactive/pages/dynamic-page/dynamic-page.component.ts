import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent implements OnInit {

  public myForm!: FormGroup; // Declara la variable sin inicializar

  constructor(private fb: FormBuilder ) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3) ] ],
      favoriteGames: this.fb.array ([
         ['Metal Gear', Validators.required ],
         ['Death Stranding', Validators.required ],
       ])
    });
  }

  onSumit(): void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;  // Form is invalid, stop processing.
    }
    console.log(this.myForm.value);
    this.myForm.reset();  // Reset form.
  }

}
