import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './pages/offers/offer/offer.component';
import { OffersComponent } from './pages/offers/offers.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/book/book.component';

const routes: Routes = [
  { path: '',  component: OffersComponent},
  { path: 'offers/:idoferta',  component: OfferComponent},
  { path: 'books',  component: BooksComponent},
  { path: 'books/:idbook',  component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
