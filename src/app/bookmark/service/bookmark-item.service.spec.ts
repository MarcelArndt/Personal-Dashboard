import { TestBed } from '@angular/core/testing';

import { BookmarkItemService } from './bookmark-item.service';

describe('BookmarkItemService', () => {
  let service: BookmarkItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
