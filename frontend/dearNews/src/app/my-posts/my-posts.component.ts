import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  user: UserModel = new UserModel();
  idUser = environment.id

  constructor(
    public authService : AuthService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }


  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp

    })
  }
}
