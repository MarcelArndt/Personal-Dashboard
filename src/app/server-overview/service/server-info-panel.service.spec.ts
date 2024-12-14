import { TestBed } from '@angular/core/testing';
import { ServerInfoPanelService } from './server-info-panel.service';

describe('ServerInfoPanelService', () => {
  let service: ServerInfoPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerInfoPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
