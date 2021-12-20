package com.dearnews.repository;
//Rubem
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dearnews.model.Topic;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {

		public List<Topic> findAllByDescriptionContainingIgnoreCase (String description);
		
		public List<Topic> findAllByNameContainingIgnoreCase (String name);
		
	}
