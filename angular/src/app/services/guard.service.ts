import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(public router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user=localStorage.getItem('user');
    if(!user){
      // this.router.navigate(['/login',{url:state.url}]);
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
