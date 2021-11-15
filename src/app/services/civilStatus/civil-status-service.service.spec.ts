import { TestBed } from '@angular/core/testing';

import { CivilStatusServiceService } from './civil-status-service.service';

describe('CivilStatusServiceService', () => {
  let service: CivilStatusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilStatusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
