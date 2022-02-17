import * as AppState from '../../state/app.state';
import { MapState } from './map.reducer';

export interface State extends AppState.State {
    mapState: MapState;
}