import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Derangement } from 'src/app/services/models';
import { DerangementService } from 'src/app/services/services/derangement.service';


@Component({
  selector: 'app-admin-derangemnts',
  templateUrl: './admin-derangemnts.component.html',
  styleUrls: ['./admin-derangemnts.component.css']
})
export class AdminDerangemntsComponent implements OnInit {

  derangements: Array<Derangement> = [];
  derangementIdToDelete: any = -1;

  constructor(
    private derangementService: DerangementService,
    private helperSevice: HelperService,
    private router: Router)
    {}
  ngOnInit(): void {
    this.findAllDerangements();
      
  }


  private findAllDerangements() {
    this.derangementService.getAllDerangements({
      
    }).subscribe({
      next: (data: Derangement[]) => {
        this.derangements = data;
      }
    });
  }

  async update(idDerangement: number | undefined) {
    await this.router.navigate(['user','newDerangement', idDerangement]);
  }

  delete(){
    if(this.derangementIdToDelete) {
      this.derangementService.deleteDerangement({
        'idDerangement': this.derangementIdToDelete
      }).subscribe({
        next: ()=> {
          window.location.reload();
          this.findAllDerangements;
        }
      })
    }
  }

}