import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AffecterOffreAUtilisateurs$Params } from 'src/app/services/fn/user/affecter-offre-a-utilisateurs';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Offre, User } from 'src/app/services/models';
import { OffreService } from 'src/app/services/services/offre.service';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  offres: Array<Offre> = [];
  users :Array<User>= [];
  userIdToDelete: any = -1;
  errorMessages: Array<string> = []; 
  

  constructor(
    private userService: UserService,
    private helperService: HelperService,
    private offreService: OffreService,
  ){}



  ngOnInit(): void {
      this.findAllUsers();
      this.findAllOffres();
  }

  private findAllUsers(){
    this.userService.getAllUsers().subscribe({
      next: (data: User[])=> {
        this.users= data;
      }, 
      error: (err) => {
        console.error('Error fetching users', err);
        this.errorMessages.push('Error fetching users');
      }
    });
  }

  private findAllOffres() {
    this.offreService.getAllOffres().subscribe({
      next: (data: Offre[]) => {
        this.offres = data;
      },
      error: (err) => {
        console.error('Error fetching offres', err);
        this.errorMessages.push('Error fetching offres');
      }
    });
  }

 /* onOffreChange(user: User) {
    if (user.selectedOffre) {
      this.userService.affecterOffreAUtilisateurs({ idOffre: user.selectedOffre, users: [user] }).subscribe({
        next: () => {
          console.log(`Offre ${user.selectedOffre} successfully assigned to user ${user.idUser}`);
        },
        error: (err) => {
          console.error('Error assigning offer to user', err);
          this.errorMessages.push('Error assigning offer to user');
        }
      });
    }
  }*/

 // Méthode pour affecter une offre à un utilisateur
 assignOfferToUser(idOffre: number, user: User) {
  if (!idOffre|| !user.idUser) {
    return;
  }



  this.userService.affecterOffreAUtilisateurs({
    idOffre: idOffre,
   
      body: [user.idUser]
    
  }).subscribe({
    next: () => {
      console.log(`Offre ${idOffre} assignée à l'utilisateur ${user.idUser}`);
      // Actualiser la liste des utilisateurs après affectation
      this.findAllUsers();
    },
    error: (err) => {
      console.error('Erreur lors de l\'affectation de l\'offre à l\'utilisateur : ', err);
      this.errorMessages.push('Erreur lors de l\'affectation de l\'offre à l\'utilisateur.');
    }
  });
}



  delete() {
    if (this.userIdToDelete) {
      console.log(`Attempting to delete user with ID: ${this.userIdToDelete}`);

      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('authToken')}`);

      this.userService.deleteUser({ idUser: this.userIdToDelete }).subscribe({
        
        next: () => {
          this.findAllUsers();
        },
        error: (err) => {
          // Votre logique pour gérer l'erreur ici
          console.error('Erreur lors de la suppression de l\'utilisateur : ', err);
          this.errorMessages.push('Impossible de supprimer l\'utilisateur en raison de dépendances existantes.');
        }
      });
    }
  }

}
