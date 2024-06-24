import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})
export class UsercardComponent {
  name = 'jhon'
  surname = 'Doe'
  age = 33
  public nationality = 'Japanese'
  married = true

  address = {
    country: 'UK',
    city: 'Damascus',
    street: 'Liberty'
  }
  private dni = '34432432'
  
  getDate() {
    return new Date()
}

}
