import { TestBed } from '@angular/core/testing';

import { FuncappService } from './funcapp.service';

describe('FuncappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncappService = TestBed.get(FuncappService);
    expect(service).toBeTruthy();
  });
});
