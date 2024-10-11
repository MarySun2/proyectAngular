import { Pipe, PipeTransform } from "@angular/core";

//Quiero Algo asi
//fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'toggleCase'
})

// PipeTransform es el metodo para hacer la transformacion visual de la data
export class ToggleCasePipe implements PipeTransform {

  // transform( value: string, ...args: any[] ): string {
  //   console.log( {args} );
  //   return value.toUpperCase();
  // }

  transform( value: string, toUpper: boolean =false ): string {
    console.log({value, toUpper});
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }

}
