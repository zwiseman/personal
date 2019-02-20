import { TestBed } from '@angular/core/testing';

import { PostBstService } from './post-bst.service';

describe('PostBstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostBstService = TestBed.get(PostBstService);
    expect(service).toBeTruthy();
  });
});
