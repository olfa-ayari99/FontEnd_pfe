import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Derangement } from 'src/app/services/models';
import { DerangementService } from 'src/app/services/services';

declare var $: any; // Déclaration de jQuery

@Component({
  selector: 'app-new-derangement',
  templateUrl: './new-derangement.component.html',
  styleUrls: ['./new-derangement.component.css']
})
export class NewDerangementComponent implements OnInit {
  
  derangement: Derangement = {
    idUser: 0
  };
  errorMessages: Array<string> = [];

  constructor(
    private derangementService: DerangementService,
    private helperService: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idDerangement = this.activatedRoute.snapshot.params['idDerangement'];
    
    if (idDerangement) {
      this.derangementService.getDerangement({
        'idDerangement': idDerangement
      }).subscribe({
        next: (data: Derangement) => {
          this.derangement = data;
          this.derangement.idUser = this.helperService.idUser;
          console.log('User ID:', this.derangement.idUser); // Vérification de l'ID utilisateur
        },
        error: (error) => {
          this.errorMessages.push(error.message);
        }
      });
    } else {
      this.derangement.idUser = this.helperService.idUser;
      console.log('User ID:', this.derangement.idUser); // Vérification de l'ID utilisateur
    }
  }


  openMap() {
    // Afficher le modal de la carte
    $('#mapModal').modal('show');
  }
  
  onLocationSelected(event: { latitude: number, longitude: number }) {
    this.derangement.latidude = event.latitude;
    this.derangement.longitude = event.longitude;
    // Fermer le modal de la carte
    $('#mapModal').modal('hide');
  }

  
  save() {
    this.errorMessages = [];
    console.log('Saving derangement:', this.derangement);
    
    if (this.derangement.idUser) {
      const idDerangement = this.activatedRoute.snapshot.params['idDerangement'];
      console.log('Derangement ID:', idDerangement);
  
      if (idDerangement) {
        // Mise à jour du dérangement existant
        this.derangementService.updateDerangement({
          body: this.derangement,
          idDerangement: idDerangement
        }).subscribe({
          next: async (data) => {
            console.log('Update successful:', data);
            await this.router.navigate(['user/derangements']);
          },
          error: (error) => {
            console.error('Update error:', error);
            this.errorMessages.push(error.message);
          }
        });
      } else {
        // Ajout d'un nouveau dérangement
        this.derangementService.addDerangement({
          body: this.derangement,
          userId: this.derangement.idUser,
          idEquip: 1
        }).subscribe({
          next: async (data) => {
            console.log('Add successful:', data);
            await this.router.navigate(['user/derangements']);
          },
          error: (error) => {
            console.error('Add error:', error);
            this.errorMessages.push(error.message);
          }
        });
      }
    } else {
      this.errorMessages.push("User ID is not defined or invalid.");
      console.error("User ID is not defined or invalid.");
    } 
  }

  async cancel() {
    await this.router.navigate(['user/derangements']);
  }
}
