import { Injectable } from '@angular/core';
import { CanMatch, Router, Route, UrlSegment, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanMatch {

  constructor(
    private router: Router
  ) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(access_token);

      // Check if the authorities property exists, is an array, and contains at least one element
      if (decodedToken && decodedToken.role) {
        if (!((decodedToken.role== 'admin:read')||(decodedToken.role == 'admin:update')||(decodedToken.role == 'admin:create')||(decodedToken.role == 'dmin:delete'))) {
          return this.router.parseUrl('/access-denied');
        }
        return true;
      } else {
        console.error('Token does not contain valid authorities information:', decodedToken);
        return this.router.parseUrl('/access-denied');
      }
    }
    return this.router.parseUrl('/login');
  }
}

