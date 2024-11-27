import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent implements OnInit {

  // public myForm: FormGroup = this.fb.group({
  //   name:['', [Validators.required]],
  //   email:['', [Validators.required]],
  //   username:['', [Validators.required]],
  //   password:['', [Validators.required, Validators.minLength(6)]],
  //   confirmPassword:['', [Validators.required, Validators.minLength(6)]]
  // })

  public myForm!: FormGroup; // Declara la variable sin inicializar

  constructor( private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
       name:['', [Validators.required, Validators.pattern (customValidators.firstNameAndLastnamePattern)]],
       email:['', [Validators.required, Validators.pattern (customValidators.emailPattern) ]],
       username:['', [Validators.required, customValidators.cantBeStrider ]],
       password:['', [Validators.required, Validators.minLength(6) ]],
       confirmPassword:['', [Validators.required, Validators.minLength(6) ]]
    });
  }

  isValidField( field: string ){
    //TODO OBTENER VALIDACION DESDE UN SERVICIO
  }

  onSumit() {
    this.myForm.markAllAsTouched();
  }
}
