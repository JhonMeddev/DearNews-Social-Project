import { UserModel } from './../model/UserModel';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { Topic } from '../model/Topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  post: Post = new Post();
  listPost: Post[]

  topic: Topic = new Topic();
  listTopic: Topic[]
  idTopic: number

  user: UserModel = new UserModel();
  idUser = environment.id



  constructor(
    public router: Router,
    public authService : AuthService,
    public postService : PostService,
    public topicService : TopicService,


  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.postService.refreshToken()
    this.authService.refreshToken()
    this.getAllPosts()
    this.getAllTopic()


  }

  getAllTopic(){
    this.topicService.getAllTopic().subscribe((resp: Topic[]) => {
      this.listTopic = resp
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((resp: Post[]) => {
      this.listPost = resp
    })
  }


  findByIdTopic(){
    this.topicService.getByIdTopic(this.idTopic).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  publicar(){
    this.topic.id = this.idTopic
    this.post.topic = this.topic

    this.user.id = this.idUser
    this.post.userModel = this.user

    this.postService.postPost(this.post).subscribe((resp: Post) => {
      this.post = resp
      alert('Postagem realizada com sucesso!')
      this.post = new Post()
      this.getAllPosts()
    })
  }

}
