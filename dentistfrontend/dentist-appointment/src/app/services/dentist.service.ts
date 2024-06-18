import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../model/appointment';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class DentistService {
  private baseUrl = 'http://localhost:8080/dentists';

  constructor(private http: HttpClient) { }

  loginDentist(jmbg: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { jmbg, password };
    return this.http.post<any>(url, body).pipe(
      catchError(this.handleError)
    );
  }

  getAllAppointments(): Observable<Appointment[]> {
    const url = `${this.baseUrl}/appointments`;
    return this.http.get<Appointment[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  cancelAppointment(appointmentId: number): Observable<any> {
    const url = `${this.baseUrl}/appointments/${appointmentId}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  getPatientByJmbg(jmbg: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${jmbg}`);
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
