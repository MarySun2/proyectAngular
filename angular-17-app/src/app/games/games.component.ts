import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = ''; // Aqui se hace la comunicacion de padre al hijo
  @Output() addFavoriteEvent = new EventEmitter<string>(); // Aqui se hace la comunicacion del hijo al padre
  
  //Metodo
  fav(gameName: string) {
    // alert(`A ${this.username} le gusta jugar a ${gameName}`);
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id: 3,
      name: 'Bloodborne'
    }
  ];
}
