import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080/patients';  // URL to web api

  constructor(private http: HttpClient) { }

  loginPatient(jmbg: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/jmbg/${jmbg}`);
  }
}
