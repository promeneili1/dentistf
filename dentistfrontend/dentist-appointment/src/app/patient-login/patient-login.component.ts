import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  jmbg: string = '';
  patient: Patient | null = null;
  errorMessage: string = '';

  constructor(private patientService: PatientService) { }

  login(): void {
    this.patientService.loginPatient(this.jmbg).subscribe(
      patient => {
        this.patient = patient;
        this.errorMessage = '';
      },
      error => {
        console.error('Error logging in patient', error);
        this.errorMessage = 'Patient not found';
        this.patient = null;
      }
    );
  }
}
