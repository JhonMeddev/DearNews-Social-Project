import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPosts(): Observable<Post[]> {

    return this.http.get<Post[]>('https://dearnews.herokuapp.com/post')
  }

  getByIdPosts(id: number): Observable<Post> {
    return this.http.get<Post>(`https://dearnews.herokuapp.com/post/${id}`,)

  }

  getByTitlePosts(title: string): Observable<Post>{
    return this.http.get<Post>(`https://dearnews.herokuapp.com/post/title/${title}`,)
  }

  getByText(text: string): Observable<Post>{
    return this.http.get<Post>(`https://dearnews.herokuapp.com/post/text/${text}`)
  }

  postPost(post: Post): Observable<Post>{
    return this.http.post<Post>('https://dearnews.herokuapp.com/post', post, this.token)
  }

}
