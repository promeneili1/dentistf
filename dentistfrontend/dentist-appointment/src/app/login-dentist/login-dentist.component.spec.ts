import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDentistComponent } from './login-dentist.component';

describe('LoginDentistComponent', () => {
  let component: LoginDentistComponent;
  let fixture: ComponentFixture<LoginDentistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDentistComponent]
    });
    fixture = TestBed.createComponent(LoginDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
