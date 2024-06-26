import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentComponent } from './appointments/appointments.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { LoginDentistComponent } from './login-dentist/login-dentist.component';
import { DentistAppointmentsComponent } from './dentist-appointments/dentist-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    AppointmentComponent,
    LoginDentistComponent,
    DentistAppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
