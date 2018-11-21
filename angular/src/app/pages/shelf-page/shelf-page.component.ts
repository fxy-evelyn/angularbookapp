import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-shelf-page',
  templateUrl: './shelf-page.component.html',
  styleUrls: ['./shelf-page.component.css']
})
export class ShelfPageComponent implements OnInit {

  shelfBooks:any[]=[];
  param:any={
    readerId:'',
    bookId:''
  };
  state:boolean=false;
  constructor(public location:Location,public shelfService:TransactionService) { }

  ngOnInit() {
    this.param.readerId=JSON.parse(localStorage.getItem('user')).Id;
    this.shelfService.getMyShelf(this.param.readerId).subscribe((res:any)=>{
      if(res.Code==100){
        this.shelfBooks=res.Data;
        if(this.shelfBooks.length!=0){
          this.state=false;
        } 
        else{
          this.state=true;
        } 
      }
    });
  }

  btnRemove_onclick(item:any,index){
    this.param.bookId=item.Book.Id;
    this.shelfService.removeBookFromShelf(this.param).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){
        this.shelfBooks.splice(index ,1);
        if(this.shelfBooks.length!=0){
          this.state=false;
        }
        else{
          this.state=true;
        }

      }
    });
  }
  btnRemoveAll_onclick(){
    this.shelfService.removeMyAllShelf(this.param.readerId).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){
        this.state=true;
        this.shelfBooks.length=0;
      }
    });
  }

  btnSubmitOrder_onclick(){
    this.shelfService.submitOrder(this.param.readerId).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){
        this.shelfBooks.length=0;
        this.state=true;
      }
    });
  }

}
