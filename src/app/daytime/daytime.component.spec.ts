import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytimeComponent } from './daytime.component';

describe('DaytimeComponent', () => {
  let component: DaytimeComponent;
  let fixture: ComponentFixture<DaytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaytimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
