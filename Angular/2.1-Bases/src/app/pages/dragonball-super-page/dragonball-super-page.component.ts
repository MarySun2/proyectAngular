import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../../service/dragonball.service';


@Component({
  selector: 'app-dragonball-super-page',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 9000 },
  // ]);

  // addCharacter(character: Character) {
  //   this.characters.update(
  //     list =>[...list, character]
  //   )
  // }

  //ijeccion de Dependencias tradicional
  // constructor(public dragonballService: DragonballService) {}

  //injeccion de Dependencias nuevo
  // property
  public dragonballService = inject(DragonballService);

 }

