import { TestBed } from '@angular/core/testing';

import { CaregiverService } from './caregiver.service';

describe('CaregiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaregiverService = TestBed.get(CaregiverService);
    expect(service).toBeTruthy();
  });
});
