import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { AppointmentComponent } from './appointments/appointments.component';
import { LoginDentistComponent } from './login-dentist/login-dentist.component';
import { DentistAppointmentsComponent } from './dentist-appointments/dentist-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PatientLoginComponent },
  { path: 'appointments', component: AppointmentComponent },
  {path: 'loginD' , component: LoginDentistComponent},
  { path: 'dentist-appointments', component: DentistAppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
