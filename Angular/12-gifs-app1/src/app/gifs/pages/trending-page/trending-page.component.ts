import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
//import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

//Deberia estar en un servicio
// const imageUrls: string[] = [
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
// ];

@Component({
  selector: 'app-trending-page',
  standalone: true,
  //imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent implements AfterViewInit{
  // gifs = signal(imageUrls);

  gifService = inject(GifService); // se importa el servicio
  scrollStateService = inject(ScrollStateService); // se importa el servicio )

  scrollDivRef = viewChild <ElementRef>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef() ?.nativeElement;
    if( !scrollDiv )return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event ) {
    const scrollDiv = this.scrollDivRef() ?.nativeElement;
    // console.log(scrollDiv);

    if( !scrollDiv )return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;  // pixeles 690
    const scrollHeight = scrollDiv.scrollHeight; // pixeles 907

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);
    // console.log(isAtBottom);


    if( isAtBottom ) {
      this.gifService.loadTrendingGifs();
    }
  }
}
