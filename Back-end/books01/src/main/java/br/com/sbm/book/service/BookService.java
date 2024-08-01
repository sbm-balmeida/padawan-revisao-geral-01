package br.com.sbm.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sbm.book.model.Book;
import br.com.sbm.book.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository books01Repository;
	
	public List<Book> findAll() {
		return books01Repository.findAll();
	}
	
	public Optional<Book> findById(Long id) {
        return books01Repository.findById(id);
    }
	
	public Book save(Book books01) {
        return books01Repository.save(books01);
    }

    public void deleteById(Long id) {
    	books01Repository.deleteById(id);
    }
    
    public List<Book> searchBooksByTitle(String title) {
        return books01Repository.findByTitle(title);
    }
}
