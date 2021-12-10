package com.dearnews.controller;
//Rubem
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dearnews.model.Topic;
import com.dearnews.repository.TopicRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/topic")
public class TopicController {
	
	@Autowired
	private TopicRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Topic>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Topic> getById(@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/name/{name}")
	public ResponseEntity<List<Topic>> getByName(@PathVariable String name){
		return ResponseEntity.ok(repository.findAllByNameContainingIgnoreCase(name));
	}
	
	@GetMapping("/description/{description}")
	public ResponseEntity<List<Topic>> getBydescription(@PathVariable String description){
		return ResponseEntity.ok(repository.findAllByDescriptionContainingIgnoreCase(description));
	}
	
	@PostMapping
	public ResponseEntity<Topic> post (@Valid @RequestBody Topic topic){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(repository.save(topic));
	}
	
	@PutMapping
	public ResponseEntity<Topic> putTopic(@Valid @RequestBody Topic topic) {
					
		return repository.findById(topic.getId())
				.map(resposta -> {
					return ResponseEntity.ok().body(repository.save(topic));
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable long id) {

        return repository.findById(id)
                .map(resposta -> {
                    repository.deleteById(id);
                    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
                })
                .orElse(ResponseEntity.notFound().build());
	}

}
