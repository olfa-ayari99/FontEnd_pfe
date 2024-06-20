import { Injectable } from '@angular/core';
import { Router, Route, UrlSegment, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { CanMatch } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService implements CanMatch {

  constructor(private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if (isTokenExpired) {
      localStorage.clear();
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
