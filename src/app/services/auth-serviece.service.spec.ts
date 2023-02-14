import { TestBed } from '@angular/core/testing';

import { AuthServieceService } from './auth-serviece.service';

describe('AuthServieceService', () => {
  let service: AuthServieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
