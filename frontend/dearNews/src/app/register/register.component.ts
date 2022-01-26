import { UserModel } from './../model/UserModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel
  confirmarSenha: string
  tipoUsuario : string

  constructor(
    private authService : AuthService,
    private router: Router) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event : any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event : any){
    this.tipoUsuario = event.target.value
  }

  register(){
    this.user.tipo = this.tipoUsuario

    if(this.user.password != this.confirmarSenha){
      alert('As senhas estão diferentes')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: UserModel) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso !')
      })
    }
  }

}
