import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router : Router,
    private alerts: AlertsService
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
      environment.userType = this.userLogin.tipo
    
      console.log(environment)
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
