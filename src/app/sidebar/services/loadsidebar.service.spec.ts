import { TestBed } from '@angular/core/testing';

import { LoadsidebarService } from './loadsidebar.service';

describe('LoadsidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadsidebarService = TestBed.get(LoadsidebarService);
    expect(service).toBeTruthy();
  });
});
