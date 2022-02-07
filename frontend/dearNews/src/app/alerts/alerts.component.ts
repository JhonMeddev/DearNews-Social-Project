import { Component, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-alertas',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() message: string
  @Input() type: string

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(){
  }

  onClose(){
    this.modal.hide()
  }

}
