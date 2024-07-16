import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; // Definir la propiedad email
  password: string = ''; // Definir la propiedad password

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password); // Implementar el método onLogin()
  }
}
