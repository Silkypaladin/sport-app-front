import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../_interfaces';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss'],
})
export class EventListItemComponent {
  @Input() event: Event;

  constructor() {}
}
