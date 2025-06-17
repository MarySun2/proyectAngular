import { CommonModule } from '@angular/common';
import { Component, computed, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
//
  private route = inject ( ActivatedRoute );
  private userService = inject(UsersService);

  //TitleLabel
  public titleLabel = computed( () => {
   if( this.user() ){
     return `Informacion del Usuario: ${ this.user()?.first_name } ${ this.user()?.last_name}`;
   }
   return 'Informacion del usuario';
  });

  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.userService.getUserById( id ) )
    )
  )

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }
}
