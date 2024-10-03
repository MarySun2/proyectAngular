// Importa las clases y decoradores necesarios desde Angular core.
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

// Decorador @Component que define la metadata del componente.
@Component({
  selector: 'shared-search-box', // Selector para insertar el componente en una plantilla.
  templateUrl: './search-box.component.html', // Ruta al archivo HTML que define la plantilla del componente.
  styles: `` // Estilos en línea para el componente, que en este caso está vacío.
})
// Clase que define el componente SearchBoxComponent.
export class SearchBoxComponent  implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;


  // Decorador @Input permite que el valor 'placeholder' sea pasado desde un componente padre.
  @Input()
  public placeholder: string = ''; // Propiedad pública con valor por defecto vacío.

  // Decorador @Output para emitir eventos hacia el componente padre.
  @Output()
  public onValue = new EventEmitter<string>(); // Crea un EventEmitter que emitirá un valor de tipo string.

  @Output()
  public onDebounce = new EventEmitter<string>(); // Crea un EventEmitter que emitirá un valor de tipo string.

  ngOnInit(): void {
      this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value =>{
        this.onDebounce.emit( value );
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  // Método para emitir el valor ingresado a través del EventEmitter.
  emitValue(value: string): void {
    this.onValue.emit(value); // Emite el valor recibido a través del evento 'onValue'.
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
