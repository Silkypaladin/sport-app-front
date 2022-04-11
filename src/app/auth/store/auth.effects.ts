import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthProxyService } from '../proxy/auth-proxy.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  loginStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      switchMap((action) =>
        this.authProxy.login(action.payload).pipe(
          map((resp) => AuthActions.loginSuccess({ token: resp['id_token'] })),
          catchError(() => of(AuthActions.loginError({ message: 'Ooops' })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authProxy: AuthProxyService,
    private router: Router
  ) {}
}
