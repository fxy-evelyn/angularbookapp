import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book.service";
import {BookInfo} from "../../info/book-info";

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css']
})
export class BookListPageComponent implements OnInit {
  // param:BookInfo=new BookInfo();
  param:any={
    categoryId:'',
    publisherId:'',
    keyword:''
  };
  sectionId:string='';
  books:any=[];
  state:boolean=false;

  constructor(public location:Location,public currentRouter:ActivatedRoute,public bookService:BookService) { }

  ngOnInit() {
    this.param.keyword=this.currentRouter.snapshot.params['key'];
    this.param.categoryId=this.currentRouter.snapshot.params['id'];
    this.sectionId=this.currentRouter.snapshot.params['sectionId'];
   
    if(this.sectionId){
      this.bookService.getSectionBookList(this.sectionId).subscribe((res:any)=>{
        if (res.Code==100){
          this.books=res.Data;
          if(this.books.length!=0){
            this.state=false;
          } 
          else{
            this.state=true;
          } 
        }
      });
    }
    else{
      this.param.keyword=this.param.keyword||'';
      this.param.categoryId=this.param.categoryId||'';
       this.bookService.getBookList(this.param).subscribe((res:any)=>{
        if (res.Code==100){
          this.books=res.Data;
          if(this.books.length!=0){
            this.state=false;
          } 
          else{
            this.state=true;
          } 
        }
        
      });
    }
   
  }

}
