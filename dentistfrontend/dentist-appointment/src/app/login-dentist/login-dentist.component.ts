import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DentistService } from '../services/dentist.service'; 

@Component({
  selector: 'app-login-dentist',
  templateUrl: './login-dentist.component.html',
  styleUrls: ['./login-dentist.component.css']
})
export class LoginDentistComponent {

  jmbg: string = '';
password: string = '';


  constructor(private dentistService: DentistService, private router: Router) { }

  login(): void {
    
    if (!this.jmbg || !this.password) {
      console.error('JMBG or password is empty');
      return;
    }

    
    this.dentistService.loginDentist(this.jmbg, this.password)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          
          this.router.navigate(['/dentist-appointments']);
        },
        (error: any) => {
          console.error('Login error:', error);
          
        }
      );
  }
}
