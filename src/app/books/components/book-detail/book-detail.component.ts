import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'
import { BookDataService } from '../../services/book-data.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookData.getBook(isbn))
    );
  }

}
