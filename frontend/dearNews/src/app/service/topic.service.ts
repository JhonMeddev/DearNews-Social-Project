import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTopic(): Observable<Topic[]>{
    return this.http.get<Topic[]>('https://dearnews.herokuapp.com/topic')
  }

  getByIdTopic(id: number): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/${id}`)
  }

  getByDescription(description: string): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/description/${description}`)
  }

  getByName(name: string): Observable<Topic>{
    return this.http.get<Topic>(`https://dearnews.herokuapp.com/topic/name/${name}`)
  }

  postTopic(topic : Topic): Observable<Topic>{
    return this.http.post<Topic>('https://dearnews.herokuapp.com/topic', topic, this.token)
  }

  putTopic(topic: Topic): Observable<Topic>{
    return this.http.put<Topic>('https://dearnews.herokuapp.com/topic', topic, this.token)
  }

  deleteTopic(id : number) {
    return this.http.delete(`https://dearnews.herokuapp.com/topic/${id}`, this.token)
  }
}
