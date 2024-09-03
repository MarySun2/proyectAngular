import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Thrunks',
    power: 10,
  }]

  @Output()
  public onDelete = new EventEmitter<string>();


  onDeleteCharacter(id?: string):void {
    //Todo Emitir el ID del personaje
    if (!id) return; // sino hay id no retorna nada

    console.log({id});

    //console.log({index});
    this.onDelete.emit(id);
  }
}
