import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Offre } from 'src/app/services/models';
import { OffreService } from 'src/app/services/services';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  offres: Array<Offre> = [];
  offreIdToDelete: any = -1;


  constructor( 
    private offreService: OffreService,
    private router: Router
  ){ }

  ngOnInit(): void {

    this.findAllOffers();
   
      
  }

  private findAllOffers(){
    this.offreService.getAllOffres().subscribe({
      next: (data: Offre[])=> {
        this.offres= data;
      }
    });
  }


  delete(){
    if(this.offreIdToDelete) {
      this.offreService.deleteOffre({
        'idOffre': this.offreIdToDelete
       
        
      }).subscribe({
        next: ()=> {
          window.location.reload();
          this.offreService.getAllOffres();
          
        }
      })
    }
  }



}
