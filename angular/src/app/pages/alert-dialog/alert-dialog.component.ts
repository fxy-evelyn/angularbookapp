import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  state:boolean=false;
  
  @Input()
  message:string="";

  constructor() { }

  ngOnInit() {
  }

  show(){
    this.state=true;
  }
  hide(){
    this.state=false;
  }

}
