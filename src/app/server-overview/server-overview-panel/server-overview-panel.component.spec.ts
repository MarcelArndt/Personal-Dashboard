import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOverviewPanelComponent } from './server-overview-panel.component';

describe('ServerOverviewPanelComponent', () => {
  let component: ServerOverviewPanelComponent;
  let fixture: ComponentFixture<ServerOverviewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerOverviewPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerOverviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
