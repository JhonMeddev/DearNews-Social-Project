package com.dearnews.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_user")
public class UserModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O campo nome não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 100)
	private String name;
	
	@NotBlank(message = "O campo e-mail não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 100, message = "O nome precisa ter entre 5 e 100 carácteres.")
	@Email(message = "O campo deve conter um email válido")
	private String email;
	
	@NotBlank(message = "O campo senha não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 100, message = "O nome precisa ter entre 5 e 100 carácteres.")
	private String password;
	
	private String photo;
	
	@OneToMany(mappedBy = "userModel", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("userModel")
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

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public List<Post> getPost() {
		return post;
	}
	public void setPost(List<Post> post) {
		this.post = post;
	}
	
}
