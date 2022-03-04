import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { TraineesListComponent } from './pages/trainees-list/trainees-list.component';
import { TrainersListComponent } from './pages/trainers-list/trainers-list.component';

const routes: Routes = [
  { path: '' , component:NavigationComponent  ,
children :[
 { path: 'AppliedForms' , component:ApplicationFormComponent} ,
  { path: 'Certificate' , component:CertificateComponent},
  { path: 'EmployeesList' , component:EmployeesListComponent},
  { path: 'TraineeList' , component:TraineesListComponent},
  { path: 'TrainersList' , component:TrainersListComponent},
  { path: 'profile' , component:AdminProfileComponent},
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'navigation' , component:NavigationComponent},
  { path: '**' , redirectTo: '/dashboard' , pathMatch:'full'}
]
} 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
