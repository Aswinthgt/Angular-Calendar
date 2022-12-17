import { TestBed } from '@angular/core/testing';

import { AgtcalendarService } from './agtcalendar.service';

describe('AgtcalendarService', () => {
  let service: AgtcalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgtcalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
