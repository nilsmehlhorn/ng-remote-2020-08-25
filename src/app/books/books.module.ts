import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
