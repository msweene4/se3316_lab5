import { TestBed, inject } from '@angular/core/testing';

import { HomepService } from './homep.service';

describe('HomepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomepService]
    });
  });

  it('should be created', inject([HomepService], (service: HomepService) => {
    expect(service).toBeTruthy();
  }));
});
