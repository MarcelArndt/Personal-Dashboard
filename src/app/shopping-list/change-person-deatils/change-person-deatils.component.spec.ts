import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePersonDeatilsComponent } from './change-person-deatils.component';

describe('ChangePersonDeatilsComponent', () => {
  let component: ChangePersonDeatilsComponent;
  let fixture: ComponentFixture<ChangePersonDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePersonDeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePersonDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
