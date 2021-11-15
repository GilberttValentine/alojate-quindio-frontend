import { TestBed } from '@angular/core/testing';

import { LodgingServiceService } from './lodging-service.service';

describe('LodgingServiceService', () => {
  let service: LodgingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodgingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
