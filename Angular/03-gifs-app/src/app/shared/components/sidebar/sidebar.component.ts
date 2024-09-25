import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  //inyecta el servicio
  constructor(private gifService: GifsService){}

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  //Metodo
  searchTag(tag: string):void {
    this.gifService.searchTag(tag);
  }
}
