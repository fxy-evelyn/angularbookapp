import {Component, OnInit, ViewChild} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-borrow-end-confirm-page',
  templateUrl: './borrow-end-confirm-page.component.html',
  styleUrls: ['./borrow-end-confirm-page.component.css']
})
export class BorrowEndConfirmPageComponent implements OnInit {

  borrowBooks:any[]=[];
  state:boolean=false;
  param:any={
    orderId:'',
    readerId:'',
  }
  params:any={
    orderId:'',
    bookNumber:''
  }

  data:string;

  @ViewChild('alertDialog')
  alertDialog:AlertDialogComponent;

  constructor(public shelfService:TransactionService) { }

  ngOnInit() {
    this.param.readerId=JSON.parse(localStorage.getItem('user')).Id;
    this.shelfService.getBorrowRecords(this.param.readerId).subscribe((res:any)=>{
      if(res.Code==100){
        for(var i=0;i<res.Data.length;i++){
          if(res.Data[i].State==3){
            this.borrowBooks.push(res.Data[i]);
          }
        }
        if(this.borrowBooks.length!=0){
          this.state=false;
        } 
        else{
          this.state=true;
        } 
      }
    });
  }

  btnReturn_onclick(item:any,index){
    this.params.orderId=item.Id;
    this.params.bookNumber=item.BookNumber;
    console.log(item);
    this.shelfService.returnBookFromShelf(this.params).subscribe((res:any)=>{
      console.log(res);
      if(res.Code==100){
        this.borrowBooks.splice(index,1);
        this.alertDialog.show();
        this.data='归还图书成功';
        setTimeout(()=>{
          this.alertDialog.hide();
        },3000);

        if(this.borrowBooks.length!=0){
          this.state=false;
        } 
        else{
          this.state=true;
        } 
      }
    });
  }

}
