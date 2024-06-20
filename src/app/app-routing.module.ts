import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DerangementsComponent } from './pages/derangements/derangements.component';
import { NewDerangementComponent } from './pages/new-derangement/new-derangement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register/confirm-register.component';
import { AccessDeinedComponent } from './pages/access-deined/access-deined.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { TokenGuardService } from './services/guard/token-guard/token-guard.service';
import { AdminGuardService } from './services/guard/admin-guard/admin-guard.service';
import { AdminDerangemntsComponent } from './admin/admin-derangemnts/admin-derangemnts.component';
import { OffresComponent } from './pages/offres/offres.component';
import { AddOffreComponent } from './pages/add-offre/add-offre.component';
import { LocalisationComponent } from './pages/localisation/localisation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'confirm-register',
    component: ConfirmRegisterComponent
  },
  {
    path: 'access-denied',
    component: AccessDeinedComponent
  },
  {
    path: 'user',
    component: MainPageComponent,
    canMatch:[TokenGuardService ],
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'derangements',
        component: DerangementsComponent
      },
      {
        path:'newDerangement',
        component: NewDerangementComponent
      },
      {
        path: 'newDerangement/:idDerangement',
        component: NewDerangementComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    component: MainAdminPageComponent,
    canMatch:[TokenGuardService, AdminGuardService],
    children: [ 
      {
        path:'dashboard',
        component: AdminDashboardComponent
      },
      {
        path:'users',
        component:ManageUsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'derangements',
        component: AdminDerangemntsComponent
      },
      {
        path: 'offres',
        component: OffresComponent
      },
      {
        path:'addOffre',
        component: AddOffreComponent
      },
      {
        path: '',
        redirectTo  : 'dashboard',
        pathMatch: 'full'
      }
      
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
