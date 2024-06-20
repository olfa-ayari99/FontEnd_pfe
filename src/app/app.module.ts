import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DerangementsComponent } from './pages/derangements/derangements.component';
import { NewDerangementComponent } from './pages/new-derangement/new-derangement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register/confirm-register.component';
import { AccessDeinedComponent } from './pages/access-deined/access-deined.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDerangemntsComponent } from './admin/admin-derangemnts/admin-derangemnts.component';
import { AddOffreComponent } from './pages/add-offre/add-offre.component';
import { OffresComponent } from './pages/offres/offres.component';
import { LocalisationComponent } from './pages/localisation/localisation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ClientsComponent,
    DerangementsComponent,
    NewDerangementComponent,
    ProfileComponent,
    MainPageComponent,
    MainAdminPageComponent,
    ManageUsersComponent,
    AdminDashboardComponent,
    ConfirmRegisterComponent,
    AccessDeinedComponent,
    UserDashboardComponent,
    AdminDerangemntsComponent,
    AddOffreComponent,
    OffresComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
 
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    },

    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
