import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthProxyService } from '../_proxy/auth-proxy.service';
import { catchError, map, of, switchMap } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loginStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((action) =>
        this.authProxy.login(action).pipe(
          map((resp) => AuthActions.loginSuccess({ token: resp['id_token'] })),
          catchError(() => of(AuthActions.loginError({ message: 'Ooops' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authProxy: AuthProxyService) {}
}
