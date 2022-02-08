import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Topic } from 'src/app/model/Topic';
import { AlertsService } from 'src/app/service/alerts.service';
import { PostService } from 'src/app/service/post.service';
import { TopicService } from 'src/app/service/topic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post = new Post();

  topic: Topic = new Topic();
  listaTopic: Topic[];
  idTopic: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private topicService: TopicService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {

    window.scroll (0,0)
      
    if(environment.token == ''){
      this.router.navigate(['/login'])
      this.alerts.showAlertDanger('Seu Token Expirou Faça Login Novamente')
      }

    let id = this.route.snapshot.params["id"];
    this.findByIdPost(id);
    this.findAllTopics();
  }

  findByIdPost(id: number) {
    this.postService.getByIdPosts(id).subscribe((resp: Post)=>{this.post=resp});
  }

  findByIdTema() {
    this.topicService.getByIdTopic
    (this.idTopic).subscribe((resp: Topic)=>{this.topic=resp});
  }

  findAllTopics() {
    this.topicService.getAllTopic().subscribe((resp: Topic[])=>{this.listaTopic = resp});
  }

  atualizar() {
    this.topic.id = this.idTopic;
    this.post.topic = this.topic;
    this.postService.putPost(this.post).subscribe((resp: Post)=>{
      this.post = resp
      this.alerts.showAlertInfo("Postagem Atualizada!")
      this.router.navigate(["/inicio"])
    });
  }


}
