import { Component, Input, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/pages/logout/logout.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  @Input() isAdmin = false;

  role= 'user';
  userFullname = '';

  constructor( private helperService: HelperService,
               private logoutService: LogoutService
  ){}

  onLogout() {
    this.logoutService.logout();
  }

  openModal(){
    this.openModal();
  }

  ngOnInit(): void {
    if(this.isAdmin) {
        this.role='admin';
    }
    this.userFullname = this.helperService.userFullname;
      
  }

}
