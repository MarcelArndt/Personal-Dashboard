import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayNavigationComponent } from './birthday-navigation.component';

describe('BirthdayNavigationComponent', () => {
  let component: BirthdayNavigationComponent;
  let fixture: ComponentFixture<BirthdayNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
