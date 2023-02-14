import { TestBed } from '@angular/core/testing';

import { RegesterservicesService } from './regesterservices.service';

describe('RegesterservicesService', () => {
  let service: RegesterservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegesterservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
