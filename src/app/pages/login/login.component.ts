import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/services/models/authentication-request';
import { AuthenticationService } from 'src/app/services/services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationResponse } from 'src/app/services/models/authentication-response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest = {};
  errorMessages: { [key: string]: string } = {};

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  login() {
    this.errorMessages = {};
    this.authService.authenticate({ body: this.authRequest }).subscribe({
      next: async (data: AuthenticationResponse) => {
        console.log('AuthenticationResponse data:', data);
        localStorage.setItem('access_token', data.access_token as string);
        const helper = new JwtHelperService();
        
        if (data && data.access_token) {
          const accessToken = data.access_token;
          localStorage.setItem('access_token', accessToken);
          try {
            const decodedToken = helper.decodeToken(accessToken);
            console.log('Token stored in localStorage:', accessToken);  
            console.log('Decoded token:', decodedToken);

            // Check the role and redirect accordingly

              // Check the role and redirect accordingly



              console.log("decodedToken",decodedToken.role) 
              if (decodedToken && decodedToken.role) {
                console.log("decodedToken", decodedToken.role);
                if (
                  decodedToken.role === 'admin:read' ||
                  decodedToken.role === 'admin:update' ||
                  decodedToken.role === 'admin:create' ||
                  decodedToken.role === 'admin:delete' // Correction ici
                ) {
                  console.log("adminnnnnnnnnn");
                  await this.router.navigate(['admin/dashboard']);
                } else {
                  await this.router.navigate(['user/dashboard']);
                }
              } 
               else {
              console.error('Decoded token does not contain role information:', decodedToken);
              this.errorMessages['general'] = 'Invalid token structure';
            }
          } catch (error) {
            console.error('Error decoding token:', error);
            this.errorMessages['general'] = 'Failed to decode token';
          }
        }
      },
      error: (err) => {
        console.log("Error response:", err);
        if (err.error instanceof Blob) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const errorData = JSON.parse(e.target.result);
            if (errorData.errorSource && errorData.errorMessage) {
              this.errorMessages[errorData.errorSource] = errorData.errorMessage;
            } else {
              this.errorMessages['general'] = 'An unexpected error occurred';
            }
          };
          reader.onerror = () => {
            this.errorMessages['general'] = 'An unexpected error occurred';
          };
          reader.readAsText(err.error);
        } else if (err.error && typeof err.error === 'object') {
          if (err.error.errorSource && err.error.errorMessage) {
            this.errorMessages[err.error.errorSource] = err.error.errorMessage;
          } else {
            this.errorMessages['general'] = 'An unexpected error occurred';
          }
        } else {
          this.errorMessages['general'] = err.error;
        }
        console.log("Extracted validation errors:", this.errorMessages);
      }
    });
  }

  async register() {
    await this.router.navigate(['register']);
  }
}

