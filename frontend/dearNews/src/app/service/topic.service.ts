import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Topic[]>{
    return this.http.get<Topic[]>('https://dearnews.herokuapp.com/topic', this.token)
  }

  getByIdTopic(id: number): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/${id}`, this.token)
  }

  getByDescription(description: string): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/description/${description}`, this.token)
  }

  getByName(name: string): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/name/${name}`, this.token)
  }

  postTopic(Topic : Topic): Observable<Topic>{
    return this.http.post<Topic>('https://dearnews.herokuapp.com/topic', Topic,this.token)
  }

  putTopic(Topic: Topic): Observable<Topic>{
    return this.http.put<Topic>('https://dearnews.herokuapp.com/topic', Topic,this.token)
  }

  deleteTopic(id : number) {
    return this.http.delete(`https://dearnews.herokuapp.com/topic/${id}`, this.token)
  }
}