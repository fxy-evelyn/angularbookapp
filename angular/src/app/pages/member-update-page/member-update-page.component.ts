import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-member-update-page',
  templateUrl: './member-update-page.component.html',
  styleUrls: ['./member-update-page.component.css']
})
export class MemberUpdatePageComponent implements OnInit {
  param:any={
    id:'',
    phone:'',
    name:'',
    cardId:'',
  };
  name:string;
  cardId:string;
  user:any;
  constructor(public location:Location,public currentRouter:ActivatedRoute,public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    this.name=this.user.Name;
    this.cardId=this.user.CardId;
  }


  btnConfirm_onclick(){
    this.param.id=this.user.Id;
    this.param.phone=this.user.Phone;
    this.param.name=this.name;
    this.param.cardId=this.cardId;

    this.userService.updateMember(this.param).subscribe((res:any)=>{
      if (res.Code==100){
          this.router.navigate(['../logout']);
      }
    });
  }
}
