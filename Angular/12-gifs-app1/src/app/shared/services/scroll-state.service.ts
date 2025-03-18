import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {

  constructor() { }
  //properties señales
  trendingScrollState = signal(0);
}
