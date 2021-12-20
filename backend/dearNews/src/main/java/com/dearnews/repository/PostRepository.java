package com.dearnews.repository;
//Rubem
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dearnews.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

	public List<Post> findAllByTitleContainingIgnoreCase (String title);
	
	public List<Post> findAllByTextContainingIgnoreCase (String text);

}
