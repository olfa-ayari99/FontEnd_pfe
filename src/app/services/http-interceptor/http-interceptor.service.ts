import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   /* const token ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsbEBjb20uY29tIiwiaWF0IjoxNzE3MTY2ODcxLCJleHAiOjE3MTcxNjgzMTF9.xXo1xlJIbI71IbraMxSDQtWglyFlX9oPmqbnl6Xutd0';
   if
    if(token !== undefined && token !== null){
      //assign token
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization : 'Bearer' + token
        })
      });
      return next.handle(authReq);
    }
    return next.handle(req);*/
    if (!req.url.includes('/authenticate') || !req.url.includes('/register')) {
      const token = localStorage.getItem('access_token');
      if (token) {
        // assigner le token;
        const authReq = req.clone({
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token
          })
        });
        return next.handle(authReq);
      }
    }
    return next.handle(req);
  }
}
