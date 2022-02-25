import {ActionReducerMap } from "@ngrx/store";
import * as fromAuth from "../auth/state/auth.reducer";

export interface State {
  auth: fromAuth.AuthState
}

export const rootReducer: ActionReducerMap<State> = {
  auth: fromAuth.authReducer
}
