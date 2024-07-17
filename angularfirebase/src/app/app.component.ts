import { Component } from '@angular/core';
import { environment } from '../environments/environments';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;

  constructor(public auth: AuthService) {}

  login() {
    this.auth.login();
  }

  glogin() {
    this.auth.glogin();
  }

  logout() {
    this.auth.logout();
  }
}
