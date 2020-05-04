import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    public authService: AuthService ) { }
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
               {

        if(this.authService.isLoggedIn){
          return true;
        }else{
         return false;
        }
    throw new Error("Method not implemented.");
  }
}
