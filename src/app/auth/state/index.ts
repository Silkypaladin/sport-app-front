import * as AppState from '../../state/app.reducer';
import { AuthState } from './auth.reducer';

export interface State extends AppState.State {
    auth: AuthState
}