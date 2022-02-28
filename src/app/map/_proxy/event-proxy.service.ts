import { Injectable } from '@angular/core';
import { Event } from '../_interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventProxyService {
  constructor(private http: HttpClient) {}

  getAllActivePublicEvents(): Observable<Event[]> {
    return of([]);
  }
}
