import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
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
