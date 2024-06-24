import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  // templateUrl: './avatar.component.html', podemos usar esto o esto
  template:`
  <h1>Ejemplo de un Inline Template</h1>
  <p>Contenido</p>
  `,
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

}
