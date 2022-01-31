import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from './../../environments/environment.prod';
import { UserModel } from './../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://dearnews.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(userModel: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://dearnews.herokuapp.com/usuarios/cadastrar', userModel)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
