import { TestBed } from '@angular/core/testing';

import { SpayedService } from './spayed.service';

describe('SpayedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpayedService = TestBed.get(SpayedService);
    expect(service).toBeTruthy();
  });
});
