import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../../services/book-data.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book;

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ isbn }) => this.bookData.getBook(isbn)),
        takeUntil(this.destroy$)
      )
      .subscribe((book) => (this.book = book));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  save(book: Book): void {
    this.bookData.updateBook({...this.book, ...book}).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
