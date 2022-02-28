import * as AppState from '../../store/app.reducer';
import { MapState } from './map.reducer';
import { createSelector } from '@ngrx/store';

interface State extends AppState.State {
  map: MapState;
}

const getMapState = (state: State) => state.map;

const getActivePublicEvents = createSelector(
  getMapState,
  (state) => state.publicActiveEvents
);

const getLoading = createSelector(getMapState, (state) => state.loading);

export { State, getMapState, getLoading, getActivePublicEvents };
