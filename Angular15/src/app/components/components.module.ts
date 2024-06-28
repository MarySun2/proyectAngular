import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AvatarComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    IconComponent,
    LinkComponent,
    UserCardComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
