import { TestBed } from '@angular/core/testing';

import { ServiceModelServiceService } from './service-model-service.service';

describe('ServiceModelServiceService', () => {
  let service: ServiceModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
