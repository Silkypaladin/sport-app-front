import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login start';
export const LOGIN_SUCCESS = '[Auth] Login success';
export const LOGIN_ERROR = '[Auth] Login error';

export const loginStart = createAction(
  LOGIN_START,
  props<{ login: string; password: string; rememberMe: boolean }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: string }>()
);

export const loginError = createAction(
  LOGIN_ERROR,
  props<{ message: string }>()
);
