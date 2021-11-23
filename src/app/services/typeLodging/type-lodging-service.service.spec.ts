import { TestBed } from '@angular/core/testing';

import { TypeLodgingServiceService } from './type-lodging-service.service';

describe('TypeLodgingServiceService', () => {
  let service: TypeLodgingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeLodgingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
