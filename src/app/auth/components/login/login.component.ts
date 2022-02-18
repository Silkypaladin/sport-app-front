import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  get login() { return this.loginForm.get('login'); }
  
  get password() { return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    if (!this.loginForm.valid) return this.loginForm.markAllAsTouched();

    // TODO: Perform Login
  }
}
