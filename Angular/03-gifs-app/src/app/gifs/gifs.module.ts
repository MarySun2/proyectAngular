import { NgModule } from '@angular/core'; // Importa el decorador NgModule de Angular.
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes como ngIf y ngFor.
import { HomePageComponent } from './pages/home/home-page.component'; // Importa el componente de la página principal de GIFs.
import { SearchBoxComponent } from './components/search-box/search-box.component'; // Importa el componente de la caja de búsqueda de GIFs.
import { CardListComponent } from './components/card-list/card-list.component'; // Importa el componente que lista las tarjetas de GIFs.
import { CardComponent } from './components/card/card.component'; // Importa el componente de tarjeta de GIF.
import { SharedModule } from '../shared/shared.module'; // Importa un módulo compartido que puede contener componentes, directivas y pipes reutilizables.

@NgModule({
  declarations: [
    HomePageComponent, // Declara el componente de la página principal.
    SearchBoxComponent, // Declara el componente de búsqueda.
    CardListComponent, // Declara el componente de lista de tarjetas.
    CardComponent // Declara el componente de tarjeta.
  ],
  imports: [
    CommonModule, // Importa el módulo común de Angular para directivas comunes.
    SharedModule // Importa el módulo compartido, permitiendo el uso de sus componentes y servicios.
  ],
  exports: [
    HomePageComponent, // Exporta el componente de la página principal para que pueda ser utilizado en otros módulos.
  ]
})
export class GifsModule { } // Declara el módulo GifsModule.
