import { Component} from '@angular/core';
import { environment } from '../environments/environments';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;

  constructor( public auth: AuthService,
    private toastr: ToastrService ) {
  }

  signEmail() {
    this.auth.login().catch( error => {
      //console.log('error en email login: ', error);
      //console.log('Error Code:', error.code);
      if (error.code === 'auth/wrong-password') {
        //alert('Contraseña no válida');
        this.toastr.error('Contraseña no válida', 'Error login');
      } else if (error.code === 'auth/invalid-email') {
        //alert('Formato de email no válido');
        this.toastr.error('Formato de email no válido', 'Error login');
      } else {
        //alert('Error en el inicio de sesión');
        this.toastr.error('Error en el inicio de sesión', 'Error login');
      }
    });
  }
}
