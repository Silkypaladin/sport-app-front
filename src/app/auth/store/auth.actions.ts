import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Login start',
  props<{ payload: { login: string; password: string; rememberMe: boolean } }>()
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ token: string }>()
);

export const loginError = createAction(
  '[Auth] Login error',
  props<{ message: string }>()
);

export const logout = createAction('[Auth] Logout');
