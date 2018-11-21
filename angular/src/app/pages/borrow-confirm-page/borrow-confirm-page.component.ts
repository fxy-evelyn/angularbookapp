import {Component, OnInit, ViewChild} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
@Component({
  selector: 'app-borrow-confirm-page',
  templateUrl: './borrow-confirm-page.component.html',
  styleUrls: ['./borrow-confirm-page.component.css']
})
export class BorrowConfirmPageComponent implements OnInit {
  state:boolean=true;
  borrowBooks:any[]=[];
  param:any={
    orderId:'',
    readerId:'',
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
          if(res.Data[i].State==2){
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


  btnConfirm_onclick(item:any,index){
    this.param.orderId=item.Id;
    this.shelfService.confirmOrder(this.param).subscribe((res:any)=>{
      if(res.Code==100){
        this.borrowBooks.splice(index,1);
        this.alertDialog.show();
        this.data='确认订单成功';
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
