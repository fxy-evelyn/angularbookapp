import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine-page',
  templateUrl: './mine-page.component.html',
  styleUrls: ['./mine-page.component.css']
})
export class MinePageComponent implements OnInit {
  userName:string='登录/注册';
  srcPath:string="assets/img/yellow.jpg";

  user:any;

  constructor(public router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    if(!this.user){
      this.userName='登录/注册';
      this.srcPath="assets/img/yellow.jpg";
    }
    else{
        this.userName=this.user.Name;
        this.srcPath="assets/img/head.jpg";
    }
  }


  btnLogin_onclick(){
    
    if(!this.user){
      this.router.navigate(['../login']);
    }
    else{
      this.router.navigate(['../logout']);      
    }
  }
}
