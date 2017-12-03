import { TestBed, inject } from '@angular/core/testing';

import { TrainingDetailService } from './training-detail.service';

describe('TrainingDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingDetailService]
    });
  });

  it('should be created', inject([TrainingDetailService], (service: TrainingDetailService) => {
    expect(service).toBeTruthy();
  }));
});
