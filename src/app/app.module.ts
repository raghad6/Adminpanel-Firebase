import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { TraineesListComponent } from './pages/trainees-list/trainees-list.component';
import { TrainersListComponent } from './pages/trainers-list/trainers-list.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule, IgxInputGroupModule, IgxButtonGroupModule, IgxRippleModule } from "igniteui-angular";
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    TraineesListComponent,
    TrainersListComponent,
    EmployeesListComponent,
    CertificateComponent,
    AdminProfileComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
