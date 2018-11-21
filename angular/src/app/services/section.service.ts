import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Gobal} from "../model/gobal";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(public http:HttpClient) { }

  getSectionList():Observable<any>{
    return this.http.get(Gobal.getRootUrl() + 'section/list')
  }
}
