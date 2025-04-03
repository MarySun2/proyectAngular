import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent { }
