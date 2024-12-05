import { TestBed } from '@angular/core/testing';

import { NavRoutersService } from './nav-routers.service';

describe('NavRoutersService', () => {
  let service: NavRoutersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavRoutersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
