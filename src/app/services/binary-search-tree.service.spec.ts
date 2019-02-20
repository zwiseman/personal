import { TestBed } from '@angular/core/testing';

import { BinarySearchTreeService } from './binary-search-tree.service';

describe('BinarySearchTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinarySearchTreeService = TestBed.get(BinarySearchTreeService);
    expect(service).toBeTruthy();
  });
});
