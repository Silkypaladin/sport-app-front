import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';

export interface State {
  auth: fromAuth.AuthState;
}

export const rootReducer: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
};
