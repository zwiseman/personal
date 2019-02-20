import { TestBed } from '@angular/core/testing';

import { PromiseServiceService } from './promise-service.service';

describe('PromiseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromiseServiceService = TestBed.get(PromiseServiceService);
    expect(service).toBeTruthy();
  });
});
