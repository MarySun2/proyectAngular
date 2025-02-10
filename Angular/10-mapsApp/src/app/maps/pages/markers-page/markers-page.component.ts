import { Component, ElementRef, ViewChild } from '@angular/core';
import {Map, LngLat, Marker} from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor [] = []; // Array of Mark

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

  //   const marker =new Marker({
  //     color: 'green',
       // element: markerHtml Marcador personalizado
  // })
  //   .setLngLat( this.currentLngLat )
  //   .addTo( this.map );
  }

  //Metodos

  createMarker() {

    if (!this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)); // Genera un hexadecimal
    const LngLat = this.map.getCenter();

    this.addMarker(LngLat, color);
  }


  addMarker(lngLat: LngLat, color: string = 'green') {
    if (!this.map ) return;

    // Creas el marcador
    const marker = new Marker ({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat)
    .addTo( this.map );

    this.markers.push( {
      color, marker, });
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

}
