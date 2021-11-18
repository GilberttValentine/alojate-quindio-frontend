import { TestBed } from '@angular/core/testing';

import { StudyLevelServiceService } from './study-level-service.service';

describe('StudyLevelServiceService', () => {
  let service: StudyLevelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyLevelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
