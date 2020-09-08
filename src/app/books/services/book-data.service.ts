import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../../environments/environment';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/books`);
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(`http://localhost:4730/books`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:4730/books/${book.isbn}`, book);
  }
}
