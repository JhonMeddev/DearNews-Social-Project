package com.dearnews.repository;
//Rubem
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dearnews.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

	public List<Post> findAllByTitleContainingIgnoreCase (String title);
	
	public List<Post> findAllByTextContainingIgnoreCase (String text);

}
