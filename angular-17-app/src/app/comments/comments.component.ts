import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentario de lo que sea</h3>
    <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*ZjYSm_q36J4KChdn" alt="foto"/>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aliquam ut expedita quo molestiae labore neque, 
      libero eveniet, tenetur quasi 
      excepturi ullam doloremque saepe sequi quae repudiandae, officiis qui est!
    </p>
  `,
  styles: [`
    h3 {
      text-align: center;
      background : blue;
      color: white;
    }

    p {
      text-align: justify;
      font-size:18px;
    }
    img {
      width: 500px;
      height: 320px;
    }
  `]
})
export class CommentsComponent {

}
