import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from 'src/app/model/Post';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  post: Post = new Post
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)

  }

  findByIdPostagem(id: number){
    this.postService.getByIdPosts(id).subscribe((resp: Post)=>{
      this.post = resp
    })
  }

  delete(){
   this.postService.deletePost(this.idPost).subscribe(()=>{
     alert('Postagem apagada com sucesso')
     this.router.navigate(['/inicio'])
   })
  }

}