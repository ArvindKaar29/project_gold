import { TestBed } from '@angular/core/testing';

import { AntSpinnerService } from './ant-spinner.service';

describe('AntSpinnerService', () => {
  let service: AntSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
