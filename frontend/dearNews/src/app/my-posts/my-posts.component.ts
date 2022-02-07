import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  user: UserModel = new UserModel();
  idUser: number

  constructor(
    public authService : AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.authService.refreshToken()

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser()
  }


  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp
    })
  }
}
