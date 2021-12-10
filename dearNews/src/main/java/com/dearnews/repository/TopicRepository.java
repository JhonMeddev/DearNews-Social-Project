package com.dearnews.repository;
//Rubem
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dearnews.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long> {

		public List<Topic> findAllByDescriptionContainingIgnoreCase (String description);
		
		public List<Topic> findAllByNameContainingIgnoreCase (String name);
		
	}
