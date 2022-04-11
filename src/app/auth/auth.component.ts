import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, token } from './store/auth.reducer';
import { Subject, takeUntil } from 'rxjs';
import { loginStart, loginSuccess } from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  token: string;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store
      .select(token)
      .pipe(takeUntil(this.destroy$))
      .subscribe((token) => (this.token = token));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login() {
    this.token
      ? this.store.dispatch(loginSuccess({ token: this.token }))
      : this.performLoginViaProxy();
  }

  private performLoginViaProxy() {
    this.store.dispatch(
      loginStart({ payload: { login: '', password: '', rememberMe: false } })
    );
  }
}
