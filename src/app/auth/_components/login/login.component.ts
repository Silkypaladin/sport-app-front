import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../../_interfaces';
import { Store } from '@ngrx/store';
import { State } from '../../../store/app.reducer';
import { loginStart } from '../../store/auth.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  error: string;
  loading = false;

  private destroy$ = new Subject<void>();

  get login() {
    return this.loginForm.get('login');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authState) => {
        this.loading = authState.loading;
        this.error = authState.authError;
      });

    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid) return this.loginForm.markAllAsTouched();
    const loginPayload: LoginData = {
      login: this.login?.value,
      password: this.password?.value,
      rememberMe: false,
    };
    this.store.dispatch(loginStart({ payload: loginPayload }));
    //todo check how it works
  }

  invalid(field: string) {
    return (
      this.loginForm.get(field)?.touched && this.loginForm.get(field)?.invalid
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
