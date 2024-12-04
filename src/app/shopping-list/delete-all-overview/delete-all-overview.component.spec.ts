import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllOverviewComponent } from './delete-all-overview.component';

describe('DeleteAllOverviewComponent', () => {
  let component: DeleteAllOverviewComponent;
  let fixture: ComponentFixture<DeleteAllOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAllOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
