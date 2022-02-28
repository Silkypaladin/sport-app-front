import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MapApiActions, MapPageActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { EventProxyService } from '../_proxy/event-proxy.service';

@Injectable()
export class MapEffects {
  getEvents$ = createEffect(() =>
    this.action$.pipe(
      ofType(MapPageActions.getPublicActiveEvents),
      switchMap(() =>
        this.eventProxy.getAllActivePublicEvents().pipe(
          map((events) =>
            MapApiActions.getPublicActiveEventsSuccess({ events })
          ),
          catchError((error) =>
            of(
              MapApiActions.getPublicActiveEventsFailure({
                errorMessage: error,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private eventProxy: EventProxyService
  ) {}
}
