import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Gobal } from '../model/gobal';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(public http:HttpClient) { }

  getMyShelf(readerId:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/GetMyShelf?readerId='+readerId);
  }

  addBookShelf(param:any):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/AddBookShelf',{params:param});
  }

  removeBookFromShelf(param:any):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/RemoveBookFromShelf',{params:param});
  }

  removeMyAllShelf(readerId:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/RemoveMyShelf?readerId='+readerId);
  }
  submitOrder(readerId:string):Observable<any>{
    let form:FormData=new FormData();
    form.append('readerId',readerId);
    return this.http.post(Gobal.getRootUrl()+'Transaction/SubmitOrder',form);
  }

  getBorrowRecords(readerId:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/GetBorrowRecords?readerId='+readerId);
  }

  cancelOrder(param:any):Observable<any>{
    let form:FormData=new FormData();
    form.append('orderId',param.orderId);
    form.append('readerId',param.readerId);
    return this.http.post(Gobal.getRootUrl()+'Transaction/CancelOrder',form);
  }

  confirmOrder(param:any):Observable<any>{
    let form:FormData=new FormData();
    form.append('orderId',param.orderId);
    form.append('readerId',param.readerId);
    return this.http.post(Gobal.getRootUrl()+'Transaction/ConfirmOrder',form);
  }

  returnBookFromShelf(param:any):Observable<any>{
    return this.http.get(Gobal.getRootUrl()+'Transaction/ReturnBook',{params:param});
  }
  
}
