import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  phone:string='';

  param:any={
    id:'',
    password:''
  };

  constructor(public location:Location,public currentRouter:ActivatedRoute,public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.phone=this.currentRouter.snapshot.params['phone'];

    this.userService.getReaderList(this.phone).subscribe((res:any)=>{
      if (res.Code==100){
        this.param.id=res.Data[0].Id;
      }
    });


  }


  //表单验证
  form_onclick(formModel:FormGroup):void{

    this.param.password=formModel.controls['password'].value;
    this.userService.reset(this.param).subscribe((res:any)=>{
      if (res.Code==100){
        this.router.navigate(['../main/mine']);
      }
      console.log(res);
    });
  }
}
