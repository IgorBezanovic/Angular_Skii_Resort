import { TestBed } from '@angular/core/testing';

import { SkiResortService } from './ski-resort.service';

describe('SkiResortService', () => {
  let service: SkiResortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiResortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
