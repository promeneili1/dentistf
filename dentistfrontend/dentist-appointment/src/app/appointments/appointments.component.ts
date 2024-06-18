import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() jmbg: string = '';
  appointments: Appointment[] = [];
  newAppointment: Appointment = {
    patientJMBG: '',
    date: '',
    time: '',
    reason: '',
    endTime: undefined,
    startTime: undefined,
    id: undefined,
    
  };
  
  errorMessage: string | undefined;
  jmbgInput: string = ''; 


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  loadAppointmentsByJMBG(jmbg: string): void {
    this.appointmentService.getAppointmentsByJMBG(jmbg).subscribe(
      appointments => {
        this.appointments = appointments;
        this.errorMessage = '';
      },
      error => {
        console.error('Error fetching appointments by JMBG', error);
        this.errorMessage = 'Could not load appointments';
      }
    );
  }

  createAppointment(): void {
    this.newAppointment.patientJMBG = this.jmbgInput; 
    this.appointmentService.createAppointment(this.newAppointment).subscribe(
      appointment => {
        this.appointments.push(appointment);
        this.newAppointment = {
          id: undefined, 
          startTime: '',
          
          endTime: '',
          patientJMBG: '',
          date: '',
          time: '',
          reason: ''
        };
        this.errorMessage = '';
      },
      error => {
        console.error('Error creating appointment', error);
        this.errorMessage = 'Could not create appointment';
      }
    );
  }

  cancelAppointment(id: number): void {
    this.appointmentService.cancelAppointment(id).subscribe(
      () => {
        
        this.appointments = this.appointments.filter(app => app.id !== id);
        this.errorMessage = ''; 
      },
      error => {
        
        if (error.status === 400) {
          
          const errorMessage = error.error.message || 'Error cancelling appointment.';
          this.errorMessage = errorMessage;
        } else {
          console.error('Error cancelling appointment:', error);
          this.errorMessage = 'Failed to cancel appointment.';
        }
      }
    );
  }
  
}
