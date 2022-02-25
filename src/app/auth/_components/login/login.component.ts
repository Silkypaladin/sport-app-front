import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from "../../interfaces/LoginData";
import { Store } from "@ngrx/store";
import { State } from "../../../state/app.reducer";
import { loginStart } from "../../state/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  loading = false;

  get login() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder, private store: Store<State>) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid) return this.loginForm.markAllAsTouched();
    this.loading = true;
    const loginPayload: LoginData = {
      login: this.login?.value,
      password: this.password?.value,
      rememberMe: false
    }
    this.store.dispatch(loginStart(loginPayload));

    // TODO: Perform Login
  }

  invalid(field: string) {
    return this.loginForm.get(field)?.touched && this.loginForm.get(field)?.invalid;
  }
}
