import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthsdayComponent } from './birthsday.component';

describe('BirthsdayComponent', () => {
  let component: BirthsdayComponent;
  let fixture: ComponentFixture<BirthsdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthsdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthsdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
