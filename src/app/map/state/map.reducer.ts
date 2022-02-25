import { createReducer } from '@ngrx/store';

export interface MapState {}

const initialState = {};

export const mapReducer = createReducer<MapState>(initialState);
