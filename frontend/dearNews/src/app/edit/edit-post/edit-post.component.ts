import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Topic } from 'src/app/model/Topic';
import { PostService } from 'src/app/service/post.service';
import { TopicService } from 'src/app/service/topic.service';

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
    private topicService: TopicService
  ) { }

  ngOnInit() {
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
      alert("Postagem Atualizada!")
      this.router.navigate(["/inicio"])
    });
  }


}
