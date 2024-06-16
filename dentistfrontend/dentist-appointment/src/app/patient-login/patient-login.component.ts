import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css'],
  providers: [AppointmentService] 
})
export class PatientLoginComponent {
  jmbg: string = '';
  patient: Patient | null = null;
  appointments: Appointment[] = [];
  errorMessage: string = '';

  

  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService // Injektiraj AppointmentService
  ) { }

  login(): void {
    this.patientService.loginPatient(this.jmbg).subscribe(
      patient => {
        this.patient = patient;
        this.errorMessage = '';
         // Poziv metode za učitavanje termina
      },
      error => {
        console.error('Error logging in patient', error);
        this.errorMessage = 'Patient not found';
        this.patient = null;
      }
    );
  }

  // loadAppointmentsByJMBG(): void {
  //   this.appointmentService.getAppointmentsByJMBG(this.jmbg).subscribe(
  //     appointments => {
  //       this.appointments = appointments;
  //       this.errorMessage = '';
  //     },
  //     error => {
  //       console.error('Error fetching appointments by JMBG', error);
  //       this.errorMessage = 'Could not load appointments';
  //     }
  //   );
  
}