import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';
import { AlertsService } from '../service/alerts.service';
import { TopicService } from '../service/topic.service'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic = new Topic()
  listTopic: Topic[]


  idTopic: number

  constructor(
    private router: Router,
    private topicService : TopicService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    window.scroll (0,0)

    if(environment.token == ''){
      this.alerts.showAlertDanger('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    if(environment.userType != "adm") {
      this.alerts.showAlertDanger("Sua conta não possui essa permissão!")
      this.router.navigate(["/inicio"])
    }

    this.topicService.refreshToken()
    this.findAllTopic()
  }


  findByIdTopic(){
    this.topicService.getByIdTopic(this.idTopic).subscribe((resp: Topic) =>{
      this.topic = resp
    })
  }

  findAllTopic(){
    this.topicService.getAllTopic().subscribe((resp: Topic[]) => {
      this.listTopic = resp
    })
  }

  register(){
    this.topicService.postTopic(this.topic).subscribe((resp: Topic)=>{
      this.topic = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTopic()
      this.topic = new Topic()
    })
  }



}
