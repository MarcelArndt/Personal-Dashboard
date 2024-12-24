import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayAddNewDayComponent } from './birthday-add-new-day.component';

describe('BirthdayAddNewDayComponent', () => {
  let component: BirthdayAddNewDayComponent;
  let fixture: ComponentFixture<BirthdayAddNewDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayAddNewDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayAddNewDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
