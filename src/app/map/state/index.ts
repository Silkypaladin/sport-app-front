import * as AppState from '../../store/app.reducer';
import { MapState } from './map.reducer';

export interface State extends AppState.State {
  mapState: MapState;
}
