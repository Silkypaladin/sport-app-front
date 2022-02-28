import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let mockStore: any;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj(['select']);
    await TestBed.configureTestingModule({
      declarations: [EventListComponent],
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    mockStore.select.and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
