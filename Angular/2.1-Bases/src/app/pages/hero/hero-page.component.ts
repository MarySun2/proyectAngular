import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {

  // 3. Crear dos señales con los valores de Irronman y 45 respectivamente
  name = signal('Ironman');
  age = signal<number>(45);

  //Señal computada
  heroDescription = computed(() => {
    const description = `${ this.name() } - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => {
    const capitalizado = `${ this.name().toUpperCase() }`
    return capitalizado;
  });

  //4. Crear un metodo llamado : getHeroDescription Debe de regresar la concatenacion del nombre y la edad
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`; //concatenacion de la señal
  }

  //5. Implementar el metodo changeHero, no recibe argumentos y lo cambia a :
  changeHero() {
  this.name.set('Spiderman');
  this.age.set(22);
}
//6.Cambiar la edad en 60
  changeAge() {
    this.age.set(60);
  }
  //7. Implementar  el metodo: resetForm, el cual establece
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
  //8. Extra: Tratar de mostrar el nombre (name) capitalizado en mayuscula sin crear una nueva señal

 }
