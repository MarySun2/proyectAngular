import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@store-front/components/product-card/product-card.component';

import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from '@products/shared/components/pagination/pagination.component';
import { PaginationService } from '@products/shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  productsResource = rxResource({
    request: () => ({ page: this.paginationService.CurrentPage() -1, }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9,
      });
    },
  });
 }
