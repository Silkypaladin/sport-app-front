import { createReducer } from "@ngrx/store";

export interface AuthState {};

const initialState: AuthState = {};

export const authReducer = createReducer<AuthState>(
    initialState
);
