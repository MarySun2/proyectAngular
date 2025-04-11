import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent { }
