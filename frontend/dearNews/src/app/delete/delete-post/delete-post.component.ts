import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from 'src/app/model/Post';
import { AlertsService } from 'src/app/service/alerts.service';
import { UserModel } from 'src/app/model/UserModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  post: Post = new Post
  idPost: number

  id = environment.id;
  user: UserModel = new UserModel();
  idUser = environment.id

  constructor(
    private router: Router,
    public authService: AuthService,
    private route: ActivatedRoute,
    private postService: PostService,
    private alerts: AlertsService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.authService.refreshToken()

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser()

    if (environment.token == ''){
      this.alerts.showAlertDanger('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
    this.findByIdUser()
  }

  findByIdPostagem(id: number){
    this.postService.getByIdPosts(id).subscribe((resp: Post)=>{
      this.post = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp
    })
  }

  delete(){
   this.postService.deletePost(this.idPost).subscribe(()=>{
    this.alerts.showAlertInfo('Postagem apagada com sucesso')
     this.router.navigate(['/inicio'])
   })
  }

}