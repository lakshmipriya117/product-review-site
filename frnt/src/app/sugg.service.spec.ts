import { TestBed } from '@angular/core/testing';

import { SuggService } from './sugg.service';

describe('SuggService', () => {
  let service: SuggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
