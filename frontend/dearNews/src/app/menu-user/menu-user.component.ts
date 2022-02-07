import { UserModel } from './../model/UserModel';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  name = environment.name;
  photo = environment.photo;
  id = environment.id;

  user: UserModel = new UserModel();
  idUser = environment.id

  constructor(
    private router: Router,
    public authService: AuthService,
    private route: ActivatedRoute,
    public postService : PostService,
    public topicService : TopicService,
  ) { }

  ngOnInit(){
    this.postService.refreshToken()
    this.topicService.refreshToken()
    this.authService.refreshToken()
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.name = ''
    environment.photo = ''
    environment.id =  0
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp

    })
  }

}
