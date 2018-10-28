import { TestBed } from '@angular/core/testing';

import { DepoRequestService } from './depo-request.service';

describe('DepoRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepoRequestService = TestBed.get(DepoRequestService);
    expect(service).toBeTruthy();
  });
});
