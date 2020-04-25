import { TestBed } from '@angular/core/testing';

import { FireBaseOperationService } from './fire-base-operation.service';

describe('FireBaseOperationService', () => {
  let service: FireBaseOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
