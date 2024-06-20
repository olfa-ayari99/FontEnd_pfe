import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/models/register-request';
import { AuthenticationService } from 'src/app/services/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterRequest: RegisterRequest = { email: '', firstname: '', lastname: '', password: '' }; 
  repeatPassword: string = '';
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  async login() {
    await this.router.navigate(['login']);
  }

  validatePasswords() {
    if (this.RegisterRequest.password !== this.repeatPassword) {
      this.errorMessages.push('Passwords do not match');
      return false;
    }
    return true;
  }

  register() {
    this.errorMessages = [];
    if (!this.validatePasswords()) {
      return;
    }
    this.authService.register({ body: this.RegisterRequest }).subscribe({
      next: async (data) => {
        await this.router.navigate(['confirm-register']);
      },
      error: (err) => {
        console.log("Error response:", err); // Log the entire error response

        // Check if the error response contains the specific message
        if (err.error && err.error.message === "User with this email already exists.") {
          this.errorMessages = ["User with this email already exists."];
        } else {
          // Handle other error cases
          if (err.error instanceof Blob && err.error.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              const errorData = JSON.parse(e.target.result);
              console.log("Parsed error data:", errorData);
              if (errorData.validationErrors) {
                this.errorMessages = errorData.validationErrors;
              } else {
                this.errorMessages = ['An unexpected error occurred'];
              }
            };
            reader.onerror = () => {
              this.errorMessages = ['An unexpected error occurred'];
            };
            reader.readAsText(err.error);
          } else {
            // Handle other types of error responses
            if (err.error && err.error.validationErrors) {
              this.errorMessages = err.error.validationErrors;
            } else {
              this.errorMessages = ['An unexpected error occurred'];
            }
          }
        }

        console.log("Extracted validation errors:", this.errorMessages);
      }
    });
  }
}
