import { TestBed } from '@angular/core/testing';

import { EventProxyService } from './event-proxy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventProxyService', () => {
  let service: EventProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EventProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
