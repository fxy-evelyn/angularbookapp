import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  categories:any[]=[];
  constructor(public categoryService:CategoryService,public router:Router) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe((res:any)=>{
      if (res.Code==100){
          this.categories=res.Data;
      }
    });



  }

  btnBookList_onclick(item:any){
    this.router.navigate(['bookList',{id:item.Id}]);
  }
}
