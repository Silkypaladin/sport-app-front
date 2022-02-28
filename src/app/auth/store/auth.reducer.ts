import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string;
  loading: boolean; // to replace "loading" boolean in components
  authError: string; // set to message if an error had occurred
}

const initialState: AuthState = {
  token: '',
  loading: false,
  authError: '',
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.loginStart, (state) => ({
    ...state,
    authError: '',
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    loading: false,
    authError: '',
  })),
  on(AuthActions.loginError, (state, { message }) => ({
    ...state,
    token: '',
    loading: false,
    authError: message,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    token: '',
    loading: false,
    authError: '',
  }))
);
