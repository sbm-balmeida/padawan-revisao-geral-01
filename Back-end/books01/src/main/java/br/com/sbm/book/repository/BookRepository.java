package br.com.sbm.book.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.sbm.book.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
	
	@Query("SELECT b FROM Book b WHERE b.title LIKE %:title%")
    List<Book> findByTitle(@Param("title") String title);	
}
