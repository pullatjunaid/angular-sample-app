import { TestBed } from '@angular/core/testing';

import { DisableLoginService } from './disable-login.service';

describe('DisableLoginService', () => {
  let service: DisableLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
