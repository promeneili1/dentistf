import { Component, OnInit } from '@angular/core';
import { DentistService } from '../services/dentist.service';
import { Appointment } from '../model/appointment';
import { Patient } from '../model/patient'; 

@Component({
  selector: 'app-dentist-appointments',
  templateUrl: './dentist-appointments.component.html',
  styleUrls: ['./dentist-appointments.component.css']
})
export class DentistAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  patients: { [key: string]: Patient } = {}; 

  constructor(private dentistService: DentistService) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.dentistService.getAllAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;
        this.fetchPatients(); // Pozivamo metod za dohvatanje pacijenata nakon što dobijemo termine
      },
      (error: any) => {
        console.error('Failed to fetch appointments:', error);
      }
    );
  }

  fetchPatients(): void {
    this.appointments.forEach(appointment => {
      this.dentistService.getPatientByJmbg(appointment.patientJMBG).subscribe(
        (patient: Patient) => {
          this.patients[patient.JMBG] = patient;
          console.log('Fetched patient:', patient); // Dodajte ovu liniju za proveru
        },
        (error: any) => {
          console.error(`Failed to fetch patient for JMBG ${appointment.patientJMBG}:`, error);
        }
      );
    });
  }
  
  

  cancelAppointment(appointmentId: number): void {
    this.dentistService.cancelAppointment(appointmentId).subscribe(
      () => this.fetchAppointments(),
      (error: any) => console.error('Failed to cancel appointment', error)
    );
  }
}
