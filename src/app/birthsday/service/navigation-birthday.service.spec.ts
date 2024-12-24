import { TestBed } from '@angular/core/testing';

import { NavigationBirthdayService } from './navigation-birthday.service';

describe('NavigationBirthdayService', () => {
  let service: NavigationBirthdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationBirthdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
