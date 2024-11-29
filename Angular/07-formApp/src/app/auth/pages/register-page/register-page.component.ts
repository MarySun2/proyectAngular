import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

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

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
       name:['', [Validators.required, Validators.pattern (this.validatorsService.firstNameAndLastnamePattern)]],
      //  email:['', [Validators.required, Validators.pattern (this.validatorsService.emailPattern)], [new EmailValidatorService() ]],
      email:['', [Validators.required, Validators.pattern (this.validatorsService.emailPattern)], [this.emailValidator]],
      password:['', [Validators.required, Validators.minLength(6) ]],
      username:['', [Validators.required, this.validatorsService.cantBeStrider ]],
      confirmPassword:['', [Validators.required, Validators.minLength(6) ]]
    });
  }

  isValidField( field: string ){
    //TODO OBTENER VALIDACION DESDE UN SERVICIO
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSumit() {
    this.myForm.markAllAsTouched();
  }
}
