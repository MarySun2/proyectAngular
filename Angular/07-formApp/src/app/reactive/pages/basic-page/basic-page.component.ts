import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      price: [0],
      inStorage: [0],
    });
  }

    onSave():void {
      console.log(this.myForm.value);
    }
}

