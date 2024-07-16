import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; // Definir la propiedad email
  password: string = ''; // Definir la propiedad password
  loginMessage: string = ''; // Añadir propiedad para el mensaje de éxito

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.loginMessage = 'Ha sido logueado exitosamente'; // Establecer mensaje de éxito
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        this.loginMessage = 'Error al iniciar sesión. Por favor, inténtelo de nuevo.'; // Mensaje de error
      });
  }
}
