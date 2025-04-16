import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) => this.productService.getProductByIdSlug(request.idSlug),
  });
}
