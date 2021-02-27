import { Injectable } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  obtenerLibros(){
    return this.http.get<Book[]>('assets/data/data.json')
    .pipe(map((info: any)=>info.books));
  }
}
