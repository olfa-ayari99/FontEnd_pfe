import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  private decodedToken: any;
  
  constructor() {
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('access_token') as string);
   }


   get idUser(): number{
    return this.decodedToken.idUser;
   }

   get userFullname(): string {
    return this.decodedToken.fullName;
  }
   
}
