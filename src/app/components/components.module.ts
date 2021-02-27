import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './cards/carousel-card/carousel-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadingComponent } from './loading/loading.component';
import { MenuLeftComponent } from './menu/menu-left/menu-left.component';
import { MenuRightComponent } from './menu/menu-right/menu-right.component';
import { BookCardComponent } from './cards/book-card/book-card.component';
import { MiniBookCardComponent } from './cards/mini-book-card/mini-book-card.component';
import { MiniAuthorCardComponent } from './cards/mini-author-card/mini-author-card.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselCardComponent,
    LoadingComponent,
    MenuLeftComponent,
    MenuRightComponent,
    BookCardComponent,
    MiniBookCardComponent,
    MiniAuthorCardComponent,
    RatingComponent
  ],
  exports: [
    CarouselComponent,
    MenuLeftComponent,
    MenuRightComponent,
    BookCardComponent,
    MiniBookCardComponent,
    MiniAuthorCardComponent,
    CarouselCardComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class ComponentsModule { }
