import { TestBed } from '@angular/core/testing';

import { NavigationBookmarkService } from './navigation-bookmark.service';

describe('NavigationBookmarkService', () => {
  let service: NavigationBookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationBookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
