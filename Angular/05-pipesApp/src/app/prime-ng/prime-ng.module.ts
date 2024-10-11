import { NgModule } from '@angular/core';
//import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
// import { SplitButtonModule } from 'primeng/splitbutton';




@NgModule({
  declarations: [],
  exports: [

    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    // SplitButtonModule
  ]
})
export class PrimeNgModule { }
