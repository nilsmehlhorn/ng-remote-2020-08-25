import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-outlet',
  templateUrl: './book-outlet.component.html',
  styleUrls: ['./book-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookOutletComponent implements OnInit {
  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit(): void {}
}
