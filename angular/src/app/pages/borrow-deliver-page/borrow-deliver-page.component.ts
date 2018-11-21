import {Component, OnInit, ViewChild} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-borrow-deliver-page',
  templateUrl: './borrow-deliver-page.component.html',
  styleUrls: ['./borrow-deliver-page.component.css']
})
export class BorrowDeliverPageComponent implements OnInit {
  borrowBooks:any[]=[];
  state:boolean=false;
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
          if(res.Data[i].State==1){
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

  btnCancel_onclick(item:any,index){
    this.param.orderId=item.Id;
    this.shelfService.cancelOrder(this.param).subscribe((res:any)=>{
      if(res.Code==100){
        this.borrowBooks.splice(index,1);
        this.alertDialog.show();
        this.data='取消成功';
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
