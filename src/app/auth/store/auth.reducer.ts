import { createReducer, on } from '@ngrx/store';
import { loginError, loginStart, loginSuccess, logout } from './auth.actions';

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

// SELECTORS
export const token = (state: AuthState) => state.token;
export const loading = (state: AuthState) => state.loading;
export const authError = (state: AuthState) => state.authError;

export const authReducer = createReducer<AuthState>(
  initialState,
  on(loginStart, (state) => ({
    ...state,
    authError: '',
    loading: true,
  })),
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    loading: false,
    authError: '',
  })),
  on(loginError, (state, { message }) => ({
    ...state,
    token: '',
    loading: false,
    authError: message,
  })),
  on(logout, (state) => ({
    ...state,
    token: '',
    loading: false,
    authError: '',
  }))
);
