package com.dearnews.model;

import java.util.Date;
//Rubem
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_post")
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O campo titulo não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 100,  message = "O campo titulo deve conter entre 5 e 100 caracteres.")
	private String title;
	
	@NotBlank(message = "O campo texto não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 1000,  message = "O campo texto deve conter entre 5 e 1000 caracteres.")
	private String text;
	
	@NotBlank(message = "O campo imagem não pode estar vazio e nem pode ser preenchido com espaços.")
	@Size(min = 5, max = 100, message = "O campo imagem não pode estar vazio e nem pode ser preenchido com espaços.")
	private String image;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@ManyToOne
	@JsonIgnoreProperties("post")
	private Topic topic;
	
	@ManyToOne
	@JsonIgnoreProperties("post")
	private UserModel userModel;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}
	
	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public UserModel getUserModel() {
		return userModel;
	}

	public void setUserModel(UserModel userModel) {
		this.userModel = userModel;
	}
}
