import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class DisableLoginService implements CanActivate{
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor(private router: Router,private profileService:ProfileService) { 
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.profileService.currentUserValue()) {
     console.log(route)
      return true;
    }
    this.router.navigate(["home"]);
    return false;
  }
}
