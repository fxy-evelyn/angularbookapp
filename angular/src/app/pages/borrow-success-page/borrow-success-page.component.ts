import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-borrow-success-page',
  templateUrl: './borrow-success-page.component.html',
  styleUrls: ['./borrow-success-page.component.css']
})
export class BorrowSuccessPageComponent implements OnInit {
  state:boolean=false;
  borrowBooks:any[]=[];

  constructor(public shelfService:TransactionService) { }

  ngOnInit() {
    let readerId=JSON.parse(localStorage.getItem('user')).Id;
    this.shelfService.getBorrowRecords(readerId).subscribe((res:any)=>{
      if(res.Code==100){
        for(var i=0;i<res.Data.length;i++){
          if(res.Data[i].State==4){
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

}
