import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private logoutUrl = 'https://localhost:8443/api/v1/auth/logout';

  constructor(
    private http: HttpClient, 
    private router: Router) { }


    logout() {
      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.http.post(this.logoutUrl, {}, { headers: headers, withCredentials: true }).subscribe({
          next: () => {
            console.log('Logout successful');
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          },
          error: err => console.error('Logout failed', err)
        });
      } else {
        console.error('No token found');
        this.router.navigate(['/login']);
      }
    }
}
