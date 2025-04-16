import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'ProductImage',
  standalone: true,
})
export class ProductImagePipe implements PipeTransform {

  transform(value: string | string []): string {

    if (typeof value == 'string'){
      return `${baseUrl}/files/product/${value}`;
    }

    const image = value.at(0);

    if (!image) {
      return './asets/images/no-images.png';
    }

    return `${baseUrl}/files/product/${image}`;

  }

}
