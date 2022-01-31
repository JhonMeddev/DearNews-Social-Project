import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router : Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe({
      next: (resp: UsuarioLogin)=>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.email = this.userLogin.email
      environment.photo = this.userLogin.photo
      environment.id = this.userLogin.id
      console.log(environment)
      this.router.navigate(['/inicio'])
      },
      error: erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
        console.log(this.userLogin)
      }
      if(erro.status == 401){
        alert('Usuário ou senha estão incorretos')
      }
    },
    });
  }
}
