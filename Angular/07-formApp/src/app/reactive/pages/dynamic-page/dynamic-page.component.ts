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

  isValidField ( field: string ): boolean | null {
    return this.myForm.controls[field].errors
     && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
     && formArray.controls[index].touched;
    }

  getFieldError( field: string): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

      for (const key of Object.keys(errors) ) {
        switch ( key ) {
          case 'required':
            return 'Este campo es requerido';

            case 'minlength':
              return `Minimo ${ errors['minlength'].requiredLength } caracteres.`;
        }
      }
      return null;
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
