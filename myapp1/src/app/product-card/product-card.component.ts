import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  // lo resivo del componente padre 
  @Input() product :any
  
  //PRODUCTO POR DEFECTO
  // product = {
  //   image: '../../assets/imagen/reloj.png',
  //   name: 'Tasty Granite Salad',
  //   description: 'The Beautiful range Apple Naturale That has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  //   unitAvailable: 20,
  //   date: 'Wed Jun 26 2024 14:02:42 GMT+0200 (hora de verano de Europa central)',
  //   price: 34.5645645,
  // }

  //-otra Forma de hacerlo con Attribute Binding Ejemplo 1
  imgBorderStyle = '1px solid black'

  //-otra Forma de hacerlo con Attribute Binding Ejemplo 3
  // productImageStyle = {
  //   border: '1px solid black',
  //   filter: 'sepia(0.3)',
  // }

  
  //Two-Way Data Binding
  formState = false

  address = ''
  postalCode = 0
  //////////////////////////////////////////////////////////////////
  //Event Binding entre la logica y el template por medio de metodos
   buyProduct() {
    alert('Compraremos un Producto!!!')
    console.log('Compraremos un Producto!!!');
    this.formState = true
   }

   orderProduct() {
    console.log(`Direccion de Usuario: ${this.address}`);
    console.log(`Direccion de Usuario: ${this.postalCode}`);
   }

   addToCart() {
    alert('Agregaremos un Producto al Carro de Compras!!!!!');
    console.log('Agregaremos un Producto al Carro de Compras!!!!!');
   }

   onMouseEnter() {
    console.log('Mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter:'sepia(0.3)'}
   }

   onMouseLeave() {
    console.log('Mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter:'sepia(0)'}
   }
   //otra Forma de hacerlo con Event Binding ejemplo 1
   productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0)',
  }
}
