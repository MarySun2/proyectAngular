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
  public onDelete = new EventEmitter<number>();


  onDeleteCharacter(index:number):void {
    //Todo Emitir el ID del personaje
    //console.log({index});
    this.onDelete.emit(index);
  }
}
