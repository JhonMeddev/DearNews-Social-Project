import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/model/Topic';
import { AlertsService } from 'src/app/service/alerts.service';
import { TopicService } from 'src/app/service/topic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent implements OnInit {

  topic: Topic = new Topic()
  idTopic: number

  constructor(
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService,
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/login'])
      }

      this.idTopic = this.route.snapshot.params['id']
      this.findByIdTopic(this.idTopic)
    }

    findByIdTopic(id: number){
      this.topicService.getByIdTopic(id).subscribe((resp: Topic)=>{
        this.topic = resp
      })
    }

    delete(){
      this.topicService.deleteTopic(this.idTopic).subscribe(()=>{
        this.alerts.showAlertInfo('Tópico apagado com sucesso!')
        this.router.navigate(['/topic'])
      })
    }
  
  
  }


