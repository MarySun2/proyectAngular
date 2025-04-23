import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@store-front/components/product-card/product-card.component';
//import { ProductCardComponent } from '../../components/product-card/product-card.component';

import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from '@products/shared/components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);

  activatedRoute = inject(ActivatedRoute);

  CurrentPage = toSignal (
    this.activatedRoute.queryParamMap.pipe(
      map( params => (params.get('page') ? + params.get('page')! : 1)),
      map( page => (isNaN(page) ? 1 : page) )
    ),
    {
      initialValue: 1,
    }
  )

  productsResource = rxResource({
    request: () => ({ page: this.CurrentPage() -1 }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9,
      });
    },
  });
 }
