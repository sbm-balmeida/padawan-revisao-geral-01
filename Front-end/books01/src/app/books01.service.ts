import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books01 } from './books01.model';

@Injectable({
  providedIn: 'root'
})
export class Books01Service {

  private apiUrl = 'http://localhost:8080/api/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books01[]> {
    return this.http.get<Books01[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Books01> {
    return this.http.get<Books01>(`${this.apiUrl}/${id}`);
  }

  createBook(books01: Books01): Observable<Books01> {
    return this.http.post<Books01>(this.apiUrl, books01);
  }

  updateBook(id: number, books01: Books01): Observable<Books01> {
    return this.http.put<Books01>(`${this.apiUrl}/${id}`, books01);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchBooks(title: string): Observable<Books01[]> {
    return this.http.get<Books01[]>(`${this.apiUrl}/search?title=${title}`);
  }
}
