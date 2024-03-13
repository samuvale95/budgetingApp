import { TestBed } from '@angular/core/testing';

import { PrivateServiceService } from './private.service';

describe('PrivateServiceService', () => {
  let service: PrivateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
