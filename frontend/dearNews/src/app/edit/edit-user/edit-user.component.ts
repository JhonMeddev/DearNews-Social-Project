import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserModel = new UserModel();
  idUser: number;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.authService.refreshToken()

    if (environment.token == "") {
      this.router.navigate(["/logar"])
    }
    this.idUser = this.route.snapshot.params["id"];
    this.findByIdUser(this.idUser);
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUser = event.target.value;
  }

  atualizar() {

    this.user.tipo = this.tipoUsuario;

    if(this.user.password != this.confirmarSenha) {
      alert("Senhas divergentes.");
    }else {
      this.authService.cadastrar(this.user).subscribe((resp: UserModel)=>{
        this.user = resp
        this.router.navigate(["/inicio"])
      });
      alert("Conta atualizada, faça login para continuar.");
      environment.token="";
      environment.name="";
      environment.photo="";
      environment.id= 0;
      this.router.navigate(["/login"]);
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: UserModel)=>{
      this.user = resp
    })
  }

}
