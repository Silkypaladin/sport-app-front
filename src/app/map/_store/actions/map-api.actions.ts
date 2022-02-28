import { createAction, props } from '@ngrx/store';

export const getPublicActiveEventsSuccess = createAction(
  '[Map API] Get Events Success',
  props<{ events: any[] }>()
);

export const getPublicActiveEventsFailure = createAction(
  '[Map API] Get Events Failure',
  props<{ errorMessage: string }>()
);
