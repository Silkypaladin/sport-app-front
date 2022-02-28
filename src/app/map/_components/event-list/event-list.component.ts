import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../_interfaces';
import { getActivePublicEvents, getLoading, State } from '../../_store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  loading$: Observable<boolean>;
  activePublicEvents$: Observable<Event[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(getLoading);
    this.activePublicEvents$ = this.store.select(getActivePublicEvents);
  }
}
