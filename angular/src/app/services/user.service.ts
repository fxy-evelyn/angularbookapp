import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Gobal } from '../model/gobal';
import {Form} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getLogin(param:any):Observable<any>{
    let form:FormData=new FormData();
    form.append('phone',param.phone);
    form.append('password',param.password);
    return this.http.post(Gobal.getRootUrl()+'member/login',form);
  }

  sendCodeForReset(phone:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'member/SendCodeForReset?phone='+phone);
  }

  verifyCodeForReset(param:any):Observable<any>{
    let form:FormData=new FormData();
    form.append('phone',param.phone);
    form.append('code',param.code);
    return this.http.post(Gobal.getRootUrl()+'member/VerifyCodeForReset',form);
  }

  reset(param:any):Observable<any> {
    let form: FormData = new FormData();
    form.append('id', param.id);
    form.append('password', param.password);
    return this.http.post(Gobal.getRootUrl() + 'member/reset', form);
  }

  getReaderList(keyword:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'member/list?keyword='+keyword);
  }

  updateMember(param:any):Observable<any>{
    let form:FormData=new FormData();
    form.append('id',param.id);
    form.append('phone',param.phone);
    form.append('name',param.name);
    form.append('cardId',param.cardId);
    form.append('address',param.address);
    return this.http.post(Gobal.getRootUrl()+'member/update',form);
  }

}
