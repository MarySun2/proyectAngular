import { Component, ElementRef, ViewChild } from '@angular/core';
import {Map, LngLat, Marker} from 'mapbox-gl';


@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.10380784179445, 4.651165392795477);


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: 13, // starting zoom
    });

    // const markerHtml = document.createElement('div'); //Marcador Personalizado
    // markerHtml.innerHTML='Fernando Herrera'

    const marker =new Marker({
      color: 'green',
      // element: markerHtml Marcador personalizado
  })
    .setLngLat( this.currentLngLat )
    .addTo( this.map );


  }

}
