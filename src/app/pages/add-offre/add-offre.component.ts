import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Offre } from 'src/app/services/models';
import { OffreService } from 'src/app/services/services';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit{

  offre: Offre = {
    nomOffre: ''
  };

  @ViewChild('addOfferModal') addOfferModal!: ElementRef;
  
  errorMessages: Array<string> = [];

  constructor(
    private offreService: OffreService,
    
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  openModal(): void {
    // Afficher le modal en changeant une variable ou en utilisant du JavaScript pour le montrer
    const modal = document.getElementById('addOfferModal');
    if (modal) {
      modal.classList.add('show');
    }
  }


  saveNewOffer(): void {
    this.offreService.addOffre({ body: this.offre }).subscribe({
      next: async (data) => {
        console.log('Offer added successfully',data);
        
        //this.offre = { nomOffre: '' }; // Réinitialiser le formulaire
        await this.router.navigate(['admin/offres']);
        window.location.reload();
      },
      error: (err) => {
        console.error('Error creating new offer', err);
        this.errorMessages.push(err.message);
      }
    });
  }


  async cancel() {
    await this.router.navigate(['admin/offres']);
  }

}
