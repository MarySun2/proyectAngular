import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styles: [
    `.link{ color: cyan}`,
    `.link:hover { color: blue}`

  ]
})
export class LinkComponent {

}
