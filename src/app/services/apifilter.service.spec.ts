import { TestBed } from '@angular/core/testing';

import { ApifilterService } from './apifilter.service';

describe('ApifilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApifilterService = TestBed.get(ApifilterService);
    expect(service).toBeTruthy();
  });
});
