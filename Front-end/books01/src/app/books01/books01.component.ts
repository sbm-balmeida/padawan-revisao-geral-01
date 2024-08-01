import { Component, OnInit } from '@angular/core';
import { Books01Service } from '../books01.service';
import { Books01 } from '../books01.model';

@Component({
  selector: 'app-books01',
  templateUrl: './books01.component.html',
  styleUrls: ['./books01.component.css']
})
export class Books01Component implements OnInit {

  books: Books01[] = [];
  novoBook: Books01 = { id: 0, title: '', author: '' };
  bookSelecionado: Books01 | null = null;
  searchQuery: string = '';

  constructor(private books01Service: Books01Service) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books01Service.getBooks().subscribe( 
      (books) => this.books = books);
  }

  adicionarBook(): void {
    this.books01Service.createBook(this.novoBook).subscribe(books => {
      this.books.push(books);
      this.novoBook = { id: 0, title: '', author: '' };
    });
  }

  selecionarBook(book: Books01): void {
    this.bookSelecionado = { ...book };
  }

  atualizarBook(): void {
    if (this.bookSelecionado) {
      this.books01Service.updateBook(this.bookSelecionado.id, this.bookSelecionado).subscribe(() => {
        this.getBooks();
        this.bookSelecionado = null;
      });
    }
  }

  deletarBook(id: number): void {
    this.books01Service.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(books => books.id !== id);
    });
  }

  searchBooks(): void {
    if (this.searchQuery.trim()) {
      this.books01Service.searchBooks(this.searchQuery).subscribe(
        (books) => this.books = books
      );
    } else {
      this.getBooks();
    }
  }

}
