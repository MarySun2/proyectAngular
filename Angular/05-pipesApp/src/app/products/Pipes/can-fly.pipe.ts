import { Pipe, PipeTransform } from "@angular/core";



@Pipe ({
  name: 'canFly'
})


export class CanFlyPipe implements PipeTransform {
  transform(value: boolean) : 'Vuela' | 'No Vuela' {
    return value ? 'Vuela' : 'No Vuela'; // si el valor es true vuela sino no vuela
  }


}
