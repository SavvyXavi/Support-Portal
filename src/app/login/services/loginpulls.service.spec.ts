import { TestBed } from '@angular/core/testing';

import { LoginpullsService } from './loginpulls.service';

describe('LoginpullsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginpullsService = TestBed.get(LoginpullsService);
    expect(service).toBeTruthy();
  });
});
