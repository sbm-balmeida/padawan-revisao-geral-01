package br.com.sbm.book.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.sbm.book.model.Book;
import br.com.sbm.book.service.BookService;

@RestController
@RequestMapping("/api/books01")
public class BookController {

	@Autowired
	private BookService books01Service;
	
	@GetMapping
	public List<Book> getAllBooks() {
		return books01Service.findAll();
	}
	
	@GetMapping("/{id}")
    public ResponseEntity<Book> getBooksById(@PathVariable Long id) {
        Optional<Book> book = books01Service.findById(id);
        return book.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }
	
	@PostMapping
    public Book createProduto(@RequestBody Book books01) {
        return books01Service.save(books01);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateProduto(@PathVariable Long id, @RequestBody Book booksDetails) {
        Optional<Book> book01 = books01Service.findById(id);

        if (book01.isPresent()) {
        	Book updatedBook = book01.get();
        	updatedBook.setName(booksDetails.getTitle());
        	updatedBook.setAuthor(booksDetails.getAuthor());
            return ResponseEntity.ok(books01Service.save(updatedBook));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        if (books01Service.findById(id).isPresent()) {
        	books01Service.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String title) {
        return books01Service.searchBooksByTitle(title);
    }
}
