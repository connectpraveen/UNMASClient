import { TestBed, inject } from '@angular/core/testing';

import { ScheduledProgramsService } from './scheduled-programs.service';

describe('ScheduledProgramsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduledProgramsService]
    });
  });

  it('should be created', inject([ScheduledProgramsService], (service: ScheduledProgramsService) => {
    expect(service).toBeTruthy();
  }));
});
