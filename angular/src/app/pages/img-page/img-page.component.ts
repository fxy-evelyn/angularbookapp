import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-page',
  templateUrl: './img-page.component.html',
  styleUrls: ['./img-page.component.css']
})
export class ImgPageComponent implements OnInit {

  state:boolean=false;

  imgPath:string;
  constructor() { }

  ngOnInit() {

  }

  show(){
    this.state=true;
    this.imgPath=sessionStorage.getItem('imgLarge');
    console.log(this.imgPath);
  }
  btnCancel_onclick(){
    this.state=false;
    // sessionStorage.removeItem('imgLarge');
  }
}
