import { UsuarioLogin } from './../model/UsuarioLogin';
import { UserModel } from './../model/UserModel';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { Topic } from '../model/Topic';
import { TopicService } from '../service/topic.service';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  post: Post = new Post();
  listPost: Post[]
  titlePosts: string

  topic: Topic = new Topic();
  listTopic: Topic[]
  idTopic: number

  user: UserModel = new UserModel();
  idUser = environment.id

  userLogin: UsuarioLogin = new UsuarioLogin()

  key = 'data'
  reverse = true

  constructor(
    public router: Router,
    public authService : AuthService,
    public postService : PostService,
    public topicService : TopicService,
    private alerts: AlertsService


  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.postService.refreshToken()
    this.topicService.refreshToken()
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


  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp

    })
  }

  findByTitle(){

    if(this.titlePosts == ''){
      this.getAllPosts()
    }else{
      this.postService.getByTitlePosts(this.titlePosts).subscribe((resp: Post[])=> {
        this.listPost = resp
      })
    }
  }

  publicar(){
    this.topic.id = this.idTopic
    this.post.topic = this.topic
    this.user.id = this.idUser
    this.post.userModel = this.user

    this.postService.postPost(this.post).subscribe({ next: (resp: Post) => {
      this.post = resp
      this.alerts.showAlertSuccess('Postagem realizada com sucesso!')
      this.post = new Post()
      this.getAllPosts()
    },

    error: erro => {
      if(erro.status == 500){
        this.alerts.showAlertDanger('Há algo de errado com sua postagem, porfavor revise')
        console.log(this.userLogin)
      }
      if(erro.status == 400){
        this.alerts.showAlertDanger('Há algo de errado com sua postagem, porfavor revise')
        console.log(this.userLogin)
      }
      if(erro.status == 401){
        this.alerts.showAlertDanger('Postagem não autorizada')
      }},})

  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe({
      next: (resp: UsuarioLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.email = this.userLogin.email
      environment.photo = this.userLogin.photo
      environment.id = this.userLogin.id
      environment.userType = this.userLogin.tipo

      this.router.navigate(['/inicio'])
      },
      error: erro => {
      if(erro.status == 500){
        this.alerts.showAlertDanger('Usuário ou senha estão incorretos')
        console.log(this.userLogin)
      }
      if(erro.status == 401){
        this.alerts.showAlertDanger('Usuário ou senha estão incorretos')
      }
    },
    });
  }

}
