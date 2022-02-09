import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { UserModel } from '../model/UserModel';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { MenuUserService } from '../service/menu-user.service';
import { MyPostsService } from '../service/my-posts.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  user: UserModel = new UserModel();
  idUser: number
  key: 'data'
  reverse: true
  constructor(
    public authService : AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService,
    public myposts: MyPostsService,
    public menuuser: MenuUserService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.authService.refreshToken()
    this.myposts.refreshToken()
    this.menuuser.refreshToken()
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser()

    if (environment.token == ''){
      this.alerts.showAlertDanger('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
  }


  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp
    })
  }
}
