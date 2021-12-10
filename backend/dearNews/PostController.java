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

import com.dearnews.model.Post;
import com.dearnews.repository.PostRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/post")
public class PostController {

	@Autowired
	private PostRepository postRepository;
	
	@GetMapping
	public ResponseEntity<List<Post>> getAll(){
		return ResponseEntity.ok(postRepository.findAll());
	}
	@GetMapping("/{id}")
	public ResponseEntity<Post> getById(@PathVariable long id){
		return postRepository.findById(id)
			.map(resp-> ResponseEntity.ok(resp))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Post>> getByTitle(@PathVariable String title){
		return ResponseEntity.ok(postRepository.findAllByTitleContainingIgnoreCase(title));
	}	
	
	@GetMapping("/texto/{texto}")
	public ResponseEntity<List<Post>> getByText(@PathVariable String text){
		return ResponseEntity.ok(postRepository.findAllByTitleContainingIgnoreCase(text));
	}	
	
	
	@PostMapping
	public ResponseEntity<Post> postPost(@Valid @RequestBody Post post){
		return ResponseEntity.status(HttpStatus.CREATED).body(postRepository.save(post));
	}
	
	@PutMapping
	public ResponseEntity<Post> putPost(@Valid @RequestBody Post post) {
					
		return postRepository.findById(post.getId())
				.map(resposta -> {
					return ResponseEntity.ok().body(postRepository.save(post));
				})
				.orElse(ResponseEntity.notFound().build());

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduto(@PathVariable long id) {
		
		return postRepository.findById(id)
				.map(resposta -> {
					postRepository.deleteById(id);
					return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
}
