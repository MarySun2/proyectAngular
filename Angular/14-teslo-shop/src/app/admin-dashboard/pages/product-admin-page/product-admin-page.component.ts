import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {  ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@products/services/products.service';


@Component({
  selector: 'app-product-admin-page',
  standalone: true,
  imports: [],
  templateUrl: './product-admin-page.component.html',
})
export class ProductAdminPageComponent {

  activatedRoute = inject(ActivatedRoute);   // Ruta activa
  router = inject(Router);                   // Redireccion
  productsService = inject(ProductsService);

  productId = toSignal(
    this.activatedRoute.params.pipe(map((params)=> params['id']))
  );

  ProductResource = rxResource({
    request: () => ({id: this.productId() }),
    loader:({ request }) => {
      return this.productsService.getProductById(request.id)
    }
  });

  redirecEffect = effect(() => {
    if (this.ProductResource.error()) {
      this.router.navigate(['/admin/products']);
    }
  });
}
