import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../../models/book';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;

  private destroy$ = new Subject<void>();

  constructor(private bookData: BookDataService) {}

  ngOnInit(): void {
    this.books$ = this.bookData.getBooks();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
