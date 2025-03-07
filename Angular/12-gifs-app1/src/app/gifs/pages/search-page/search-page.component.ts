import { Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {

  //injectar el servicio
  gifsService = inject( GifService )

  //Metodo
  onSearch(query: string) {
    // console.log({query});
    this.gifsService.searchGifs(query);
  }
}
