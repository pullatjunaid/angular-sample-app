import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,private profileService:ProfileService) { 
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.profileService.currentUserValue()) {
     console.log(route)
      return true;
    }
    this.router.navigate(["auth/login"], { queryParams: { retUrl: route.url } });
    return false;
  }
}
