import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {SharedDataService} from './shared-data.service';

/* Auth Guard to guard the pages against restricted users */
@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private sharedservice: SharedDataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.sharedservice.getUserLoggedIn();
  }
}
