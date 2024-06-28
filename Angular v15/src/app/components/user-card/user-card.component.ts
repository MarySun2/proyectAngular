import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  name = 'Jhon'
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
