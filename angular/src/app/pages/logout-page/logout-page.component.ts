import {Component,  OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {ImgPageComponent} from "../img-page/img-page.component";

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  user:any;

  imgPath:string='../../../assets/img/mine.jpg';

  @ViewChild('imgDialog')
  imgDialog:ImgPageComponent;

  constructor(public location:Location,public router:Router,public userService:UserService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  btnLargerImg_onclick(){
    this.imgDialog.show();
    sessionStorage.setItem('imgLarge',this.imgPath);
  }

  btnLogout_onclick(){
    localStorage.removeItem('user');
    this.router.navigate(['../main/mine']);
  }
}
