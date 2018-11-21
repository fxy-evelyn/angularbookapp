import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Gobal} from "../model/gobal";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(public http:HttpClient) { }
  getAdvert():Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'advert/list')
  }
}
