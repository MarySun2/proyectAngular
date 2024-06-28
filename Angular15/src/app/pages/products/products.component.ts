import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    ProductsService
  ]
})
export class ProductsComponent {

  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  products: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((response: any) => {
        this.products = response.products
      })

  }
}
