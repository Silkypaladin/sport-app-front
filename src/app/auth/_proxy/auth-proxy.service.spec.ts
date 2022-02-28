import { TestBed } from '@angular/core/testing';

import { AuthProxyService } from './auth-proxy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthProxyService', () => {
  let service: AuthProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthProxyService],
    });
    service = TestBed.inject(AuthProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
