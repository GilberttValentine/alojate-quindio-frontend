import { TestBed } from '@angular/core/testing';

import { MunicipalityServiceService } from './municipality-service.service';

describe('MunicipalityServiceService', () => {
  let service: MunicipalityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipalityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
