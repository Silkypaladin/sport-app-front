import { createReducer } from "@ngrx/store";
import { User } from "src/common/interfaces/User";


// Here I'm' declaring required global state slices (like user data or app settings)

interface UserState {
    userData: User | null,
    token: string
};

export interface State {
    currentUser: UserState
};

const initialUserState: UserState = {
    userData: null,
    token: ''
};

export const userReducer = createReducer<UserState>(
    initialUserState
);
