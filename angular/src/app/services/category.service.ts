import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gobal} from "../model/gobal";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }

  getCategoryList():Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'category/list')
  }
}
