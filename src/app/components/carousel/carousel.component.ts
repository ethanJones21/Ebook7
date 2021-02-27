import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from '../../providers/books.service';
import { Book } from '../../interfaces/book.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  @Input('theme') theme: string;

  private options = { 
    loop: false, 
    mouseDrag: true,
    touchDrag: true, 
    pullDrag: true, 
    dots: false, 
    autoplay: false, 
    autoplayHoverPause: true, 
    responsiveClass:true,
    nav: true,
    margin: 10,
    autoWidth:true,
    smartSpeed :900,
    // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    navText : ["<i class='fal fa-chevron-left'></i>","<i class='fal fa-chevron-right'></i>"]
  };

  customOptions: OwlOptions = {
    ...this.options,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  
  books: Book[];
  subs = new Subscription();

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.obtenerLibros()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  obtenerLibros(){
    this.booksService.obtenerLibros()
    .subscribe(books => {
      console.log(books);
      this.books = books
    });
  }

}
