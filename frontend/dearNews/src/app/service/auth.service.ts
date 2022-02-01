import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from './../../environments/environment.prod';
import { UserModel } from './../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://dearnews.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(userModel: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://dearnews.herokuapp.com/usuarios/cadastrar', userModel)
  }

  getByIdUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`https://dearnews.herokuapp.com/usuarios/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  nome(){
    let nome: string = ''
    let nomeOk : any = environment.name

    if (nomeOk != '' ) {
      nome = nomeOk
    }
    return nome
  }

  foto(){
    let foto: string = ''
    let fotoOk : any = environment.photo

    if (fotoOk != '' ) {
      foto = fotoOk
    }
    return foto
  }
}
