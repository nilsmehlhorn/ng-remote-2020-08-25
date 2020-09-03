import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';


@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BooksComponent, BookEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
