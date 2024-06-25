import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = {
    image: '../../assets/imagen/reloj.png',
    name: 'Tasty Granite Salad',
    description: 'The Beautiful range Apple Naturale That has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    uniAvailable: 19,
  }
}
