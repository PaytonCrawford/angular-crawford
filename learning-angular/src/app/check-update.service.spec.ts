import { TestBed } from '@angular/core/testing';

import { CheckUpdateService } from './check-update.service';

describe('LogUpdateService', () => {
  let service: CheckUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
