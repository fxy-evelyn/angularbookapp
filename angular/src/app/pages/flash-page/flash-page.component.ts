import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flash-page',
  templateUrl: './flash-page.component.html',
  styleUrls: ['./flash-page.component.css']
})
export class FlashPageComponent implements OnInit {
timer:any;
  constructor(public router:Router) { }

  ngOnInit() {
    this.timer=setTimeout(()=>{
      this.router.navigate(['main']);
    },2000);
  }
  btnSkip_onclick(){
    this.router.navigate(['main']);
  }
}
