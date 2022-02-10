import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/model/Topic';
import { AlertsService } from 'src/app/service/alerts.service';
import { TopicService } from 'src/app/service/topic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent implements OnInit {

  topic: Topic = new Topic()
  idTopic: number

  constructor(
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    window.scroll (0,0)

    this.idTopic = this.route.snapshot.params['id']
    this.findByIdTopic(this.idTopic)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
   
  }

  findByIdTopic(id: number){
    this.topicService.getByIdTopic(id).subscribe((resp: Topic) => {
      this.topic = resp
    })
  }

  update(){
    this.topicService.putTopic(this.topic).subscribe((resp: Topic)=>{
      this.topic = resp
      this.alerts.showAlertInfo('Tópico atualizado com sucesso!')
      this.router.navigate(['/topic'])
    })
  }

}
