import { createReducer } from '@ngrx/store';
import { Event } from '../_interfaces';

export interface MapState {
  publicActiveEvents: Event[];
  loading: boolean;
}

const initialState = {
  publicActiveEvents: [],
  loading: false,
};

export const mapReducer = createReducer<MapState>(initialState);
