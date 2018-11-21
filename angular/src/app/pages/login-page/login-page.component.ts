import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  param:any={
    phone:'',
    password:''
  };
  lblPhone:string="";
  lblPassword:string="";
  constructor(public location:Location,public userService:UserService,public router:Router,public currentRouter:ActivatedRoute) { }

  ngOnInit() {
    
  }

  checkPhone():boolean{
    let pattern=/^1[3578]\d{9}$/;
    if(this.param.phone.length==0){
      this.lblPhone='手机号不能为空';
      return false;
    }
    if(!pattern.test(this.param.phone)){
      this.lblPhone='手机号格式不正确，请输入有效手机号';
      return false;
    }
    this.lblPhone='';
    return true;
  }
  // 密码有误，请输入正确密码
  checkPassword():boolean{
    let pattern=/^\d{4}$/;
    if(this.param.password.length==0){
      this.lblPassword='密码不能为空';
      return false;
    }
    if(!pattern.test(this.param.password)){
      this.lblPassword='密码格式不正确，请输入有效密码';
      return false;
    }
    this.lblPassword='';
    return true;
  }

  btnLogin_onclick(){
    this.checkPhone();
    this.checkPassword();
    if(this.checkPhone()&&this.checkPassword()){
      this.userService.getLogin(this.param).subscribe((res:any)=>{
        if(res.Code==100){
          this.lblPhone='';
          this.lblPassword='';
          localStorage.setItem('user',JSON.stringify(res.Data));
          // let url=this.currentRouter.snapshot.params['url'];
          // this.router.navigateByUrl(url);
          this.location.back();
        }   
      });  
    }
    else{
      this.lblPassword='信息不匹配';
    }
  }

}
