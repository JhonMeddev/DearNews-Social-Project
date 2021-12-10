package com.dearnews.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_topic")
public class Topic {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O campo nome não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 2, max = 20, message = "O nome precisa ter entre 2 e 20 carácteres.")
	private String name;
	
	@NotBlank(message = "O campo descrição não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 50, message = "A descrição precisa ter entre 5 e 50 carácteres.")
	private String description;
	
	private boolean savePost;
	
	@OneToMany(mappedBy = "topic", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("topic") // evita o loop-infinito de post procurar topic e topic procurar post. garantindo apenas 1 retorno
	private List<Post> post;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isSavePost() {
		return savePost;
	}

	public void setSavePost(boolean savePost) {
		this.savePost = savePost;
	}
	
	
}
