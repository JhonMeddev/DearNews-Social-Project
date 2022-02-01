import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/model/Topic';
import { TopicService } from 'src/app/service/topic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent implements OnInit {

  topic: Topic = new Topic()

  constructor(
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTopic(id)
  }

  findByIdTopic(id: number){
    this.topicService.getByIdTopic(id).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  update(){
    this.topicService.putTopic(this.topic).subscribe((resp: Topic)=>{
      this.topic = resp
      alert('Tópico atualizado com sucesso!')
      this.router.navigate(['/topic'])
    })
  }

}
