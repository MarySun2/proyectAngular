import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@store-front/components/product-card/product-card.component';
//import { ProductCardComponent } from '../../components/product-card/product-card.component';

import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from '@products/shared/components/pagination/pagination.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productsService.getProducts({});
    },
  });
 }
