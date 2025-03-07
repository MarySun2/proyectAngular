import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {

  //injectar el servicio y propiedades
  gifsService = inject( GifService )
  gifs = signal<Gif[]>([]);

  //Metodo
  onSearch(query: string) {
    this.gifsService.searchGifs(query).subscribe((resp) => {
      // console.log(resp);
      this.gifs.set(resp);
    });
  }
}
