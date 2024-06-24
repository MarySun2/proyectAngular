import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnChanges {
    @Input() title ='';
    @Output() dataFromChild = new EventEmitter(); // modulo de angular core para enviar un valor y se inicializa el objeto

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      this.dataFromChild.emit('data from child component');
    }
}
