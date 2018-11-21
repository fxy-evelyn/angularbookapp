import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlashPageComponent } from './pages/flash-page/flash-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MinePageComponent } from './pages/mine-page/mine-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { ShelfPageComponent } from './pages/shelf-page/shelf-page.component';
import { RemarkPipe } from './pipes/remark.pipe';
import { GuardService } from './services/guard.service';
import { BorrowRecordPageComponent } from './pages/borrow-record-page/borrow-record-page.component';
import { BorrowDeliverPageComponent } from './pages/borrow-deliver-page/borrow-deliver-page.component';
import { BorrowConfirmPageComponent } from './pages/borrow-confirm-page/borrow-confirm-page.component';
import { BorrowSuccessPageComponent } from './pages/borrow-success-page/borrow-success-page.component';
import { BorrowEndConfirmPageComponent } from './pages/borrow-end-confirm-page/borrow-end-confirm-page.component';
import { AlertDialogComponent } from './pages/alert-dialog/alert-dialog.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { MemberUpdatePageComponent } from './pages/member-update-page/member-update-page.component';
import { ImgPageComponent } from './pages/img-page/img-page.component';

const ROUTES:Routes=[
  {path:'',redirectTo:'flash',pathMatch:'full'},
  {path:'flash',component:FlashPageComponent},
  {path:'main',component:MainPageComponent,children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomePageComponent},
      {path:'list',component:ListPageComponent},
      {path:'cart',component:CartPageComponent},
      {path:'mine',component:MinePageComponent},
    ]},
  {path:'bookList',component:BookListPageComponent},
  {path:'detail',component:DetailPageComponent,canActivate:[GuardService]},
  {path:'login',component:LoginPageComponent},
  {path:'logout',component:LogoutPageComponent,canActivate:[GuardService]},
  {path:'member',component:MemberUpdatePageComponent},
  {path:'reset',component:RegisterPageComponent},
  {path:'code',component:CodePageComponent},
  {path:'search',component:SearchPageComponent},
  {path:'shelf',component:ShelfPageComponent,canActivate:[GuardService]},
  {path:'borrowRecord',component:BorrowRecordPageComponent,canActivate:[GuardService],children:[
    {path:'',redirectTo:'borrowDeliver',pathMatch:'full'},
    {path:'borrowDeliver',component:BorrowDeliverPageComponent},
    {path:'borrowConfirm',component:BorrowConfirmPageComponent},
    {path:'borrowEndConfirm',component:BorrowEndConfirmPageComponent},
    {path:'borrowSuccess',component:BorrowSuccessPageComponent},
  ]},
  {path:'**',component:NotFoundPageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    FlashPageComponent,
    MainPageComponent,
    MinePageComponent,
    HomePageComponent,
    ListPageComponent,
    CartPageComponent,
    DetailPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    RegisterPageComponent,
    SearchPageComponent,
    LogoutPageComponent,
    BookListPageComponent,
    ShelfPageComponent,
    RemarkPipe,
    BorrowRecordPageComponent,
    BorrowDeliverPageComponent,
    BorrowConfirmPageComponent,
    BorrowSuccessPageComponent,
    BorrowEndConfirmPageComponent,
    AlertDialogComponent,
    CodePageComponent,
    MemberUpdatePageComponent,
    ImgPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
