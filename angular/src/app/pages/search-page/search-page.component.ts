import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  keyword:string='';
  keywordList:any[]=[];
  key:any[]=[];
  constructor(public router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('keywordList')!=null){
      this.keywordList =JSON.parse(localStorage.getItem('keywordList'));
    }
  }

  btnSearch_onclick(){
    if(this.keyword.length!=0){
      this.router.navigate(['../bookList',{key:this.keyword}]);
      this.keywordList.unshift(this.keyword);
      localStorage.setItem('keywordList',JSON.stringify(this.keywordList));
    }

  }

  btnClearKeyword_onclick(){
    localStorage.removeItem('keywordList');
    this.keywordList.length=0;
  }

  btnKey_onclick(item){
    this.keyword=item;
    this.router.navigate(['../bookList',{key:this.keyword}]);
  }

}
