import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BooksComponent } from './pages/books/books.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';
import { BookNewComponent } from './pages/book-new/book-new.component';
import { SharedModule } from '../shared/shared.module';
import { BookOutletComponent } from './components/book-outlet/book-outlet.component';


@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BooksComponent, BookEditComponent, BookNewComponent, BookOutletComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SharedModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
