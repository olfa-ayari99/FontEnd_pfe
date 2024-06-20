  import { Component, OnInit } from '@angular/core';
  import { HelperService } from 'src/app/services/helper/helper.service';
  import { UserService } from 'src/app/services/services';
  import { User } from 'src/app/services/models';
  import { ChangePasswordRequest } from 'src/app/services/models/change-password-request';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  export class ProfileComponent implements OnInit {

    user: User = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      currentPassword: undefined
    };  

    currentPassword: string = '';
    newPassword: string = '';
    repeatPassword: string = ''; // Ajouté pour stocker le mot de passe répété
    successMsg = '';
    errorMessages: Array<string> = []; // Ajouté pour stocker les messages d'erreur

    constructor(
      private userService: UserService,
      private helperService: HelperService
    ) { }

    ngOnInit(): void {
      this.userService.getUser({
        'idUser': this.helperService.idUser
      }).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Error fetching user data:', err);
          this.errorMessages.push('An error occurred while fetching user data.');
        }
      });
    }

    validatePasswords(): boolean {
      if (this.newPassword !== this.repeatPassword) {
        this.errorMessages.push('Passwords do not match');
        return false;
      }
      return true;
    }

    save(): void {
      this.errorMessages = [];
      this.successMsg = '';

      // Mettre à jour les informations personnelles
      this.updatePersonalInfo();

      // Changer le mot de passe si les champs de mot de passe sont remplis
      if (this.currentPassword && this.newPassword && this.repeatPassword) {
        if (!this.validatePasswords()) {
          return;
        }
        this.changePassword();
      }
      this.updatePersonalInfo();
    }

    updatePersonalInfo(): void {
      this.user.idUser = this.helperService.idUser;
      this.userService.updateUser({
        body: this.user
      }).subscribe({
        next: () => {
          this.successMsg = 'Your profile has been successfully updated';
        },
        error: (err) => {
          console.error('Error updating profile:', err);
          this.errorMessages.push('An unexpected error occurred while updating profile');
        }
      });
    }

    changePassword(): void {
      const changePasswordRequest: ChangePasswordRequest = {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmationPassword: this.repeatPassword
      };
      this.userService.changePassword({ body: changePasswordRequest }).subscribe({
        next: () => {
          this.successMsg += ' Password has been successfully changed';
        },
        error: (err) => {
          console.error('Error changing password:', err);
          this.errorMessages.push('An error occurred while changing the password');
        }
      });
    }
  }
