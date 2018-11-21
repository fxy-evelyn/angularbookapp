import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { TransactionService } from '../../services/transaction.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  bookId:string='';
  bookDetail:any = {};
  tempBook:any={

  };
  param:any={
    readerId:'',
    bookId:''
  };

  data:string;

  @ViewChild('alertDialog')
  alertDialog:AlertDialogComponent;

  borrowBookCount:number=0;
  constructor(public location:Location,public currentRouter:ActivatedRoute,public bookService:BookService,public shelfService:TransactionService) { }

  ngOnInit() {
    this.bookId=this.currentRouter.snapshot.params['bookId'];
    this.param.readerId=JSON.parse(localStorage.getItem('user')).Id;
    this.bookService.getBookSingle(this.bookId).subscribe((res:any)=>{
      if(res.Code==100){
        this.bookDetail=res.Data;
        this.tempBook.Id=this.bookDetail.Book.Id;
        this.tempBook.Image=this.bookDetail.Book.Image;
        this.tempBook.Name=this.bookDetail.Book.Name;
        this.tempBook.AuthorName=this.bookDetail.Book.Author.Name;
        this.tempBook.PublisherName=this.bookDetail.Book.Publisher.Name;
        this.tempBook.PublishDate=this.bookDetail.Book.PublishDate;
        this.tempBook.Number=this.bookDetail.Number;
        this.tempBook.DetailLength=this.bookDetail.Detail.length;
        this.tempBook.Introduce=this.bookDetail.Book.Introduce;
      }
    });
    this.shelfService.getMyShelf(this.param.readerId).subscribe((res:any)=>{
      if(res.Code==100){
        this.borrowBookCount=res.Data.length;
      }
    });

  }

  btnAddBook_onclick(itemId:string){
    this.param.bookId=itemId;
    console.log(this.param);
    this.shelfService.addBookShelf(this.param).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){
        this.borrowBookCount++;
        this.alertDialog.show();
        this.data='成功添加到书架';
        setTimeout(()=>{
          this.alertDialog.hide();
        },3000);
      }
      else{
        this.alertDialog.show();
        this.data='已存在在借书架';
        setTimeout(()=>{
          this.alertDialog.hide();
        },3000);
      }
    });

    
  }

}
