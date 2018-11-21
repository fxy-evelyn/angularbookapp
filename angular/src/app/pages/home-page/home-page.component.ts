import { Component, OnInit } from '@angular/core';
import {AdvertService} from "../../services/advert.service";
import {SectionService} from "../../services/section.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  sections:any[]=[];
  sectionBooks:any[]=[];
  adverts:any[]=[];
  sectionId:string;
  currentIndex:number=0;
  srcPath:string;

  constructor(public advertService:AdvertService,public sectionService:SectionService) {
  }

  ngOnInit() {
    this.advertService.getAdvert().subscribe((res:any)=>{
      if (res.Code==100) {
        this.adverts=res.Data;
        setInterval(()=>{
          this.currentIndex++;
          if(this.currentIndex>=this.adverts.length){
            this.currentIndex=0;
          }
          this.srcPath=this.adverts[this.currentIndex].Image;
        },3000);
        this.srcPath=this.adverts[this.currentIndex].Image;
      }
    });

      this.sectionService.getSectionList().subscribe((res:any)=>{
        if (res.Code==100) {
          this.sections=res.Data;
        }
      });
    
  } 

}
