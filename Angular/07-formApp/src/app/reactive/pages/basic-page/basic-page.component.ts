import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Nombre del producto
const rtx5090 = {
  name: 'RTX 5090',
  price: '2500',
  inStorage: '6',
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  // Create a form group with FormControl
  // public myFormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  //   });

  //otra forma de realizar el form group
  public myForm!: FormGroup; // Declara la variable sin inicializar

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializa el formulario en ngOnInit
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3) ] ],
      price: [0, [Validators.required, Validators.min(0) ] ],
      inStorage: [0, [Validators.required, Validators.min(0) ] ],
    });

    this.myForm.reset( rtx5090);
  }

    onSave():void {

      if ( this.myForm.invalid ) return;

      console.log(this.myForm.value);

      this.myForm.reset({price: 0, inStorage:0 });
    }
}

