import { Component } from '@angular/core';
import { ProductCardComponent } from '@store-front/components/product-card/product-card.component';
//import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
