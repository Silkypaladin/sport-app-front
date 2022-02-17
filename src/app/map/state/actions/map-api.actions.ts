import { createAction, props } from "@ngrx/store";

export const getEventsSuccess = createAction(
    '[Map API] Get Events Success',
    props<{events: any[]}>()
);

export const getEventsFailure = createAction(
    '[Map API] Get Events Failure',
    props<{errorMessage: string}>()
);