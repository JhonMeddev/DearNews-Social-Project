import { UserModel } from './../model/UserModel';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  name = environment.name;
  photo = environment.photo;
  id = environment.id;


  constructor(
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.name = ''
    environment.photo = ''
    environment.id =  0
  }



}
