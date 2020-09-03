import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';


@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
