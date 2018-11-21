import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gobal} from "../model/gobal";
import {BookInfo} from "../info/book-info";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { }

  getBookList(param:any):Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'book/list',{params:param as any});
  }

  getSectionBookList(sectionId:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'book/GetBooksBySection?sectionId='+sectionId);
  }
  
  getBookSingle(bookId:string):Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'book/single?id='+bookId);
  }

  
}