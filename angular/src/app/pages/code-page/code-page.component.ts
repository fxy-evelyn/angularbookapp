import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})

export class CodePageComponent implements OnInit {

    phone:string='';
    code:string='';

    param:any={
      phone:'',
      code:''
    };
  constructor(public location:Location,public router:Router,public userService:UserService){

  }

  ngOnInit() {

  }

  //表单验证
  form_onclick(formModel:FormGroup):void{
    // 获取验证码
    this.userService.sendCodeForReset(formModel.controls['phone'].value).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){

      }
    });

    this.userService.verifyCodeForReset(formModel.value).subscribe((res:any)=>{
      console.log(res);
      if(res.Code == 100){
        this.router.navigate(['../reset',{phone:formModel.controls['phone'].value}]);
      }
    });
  }

}
