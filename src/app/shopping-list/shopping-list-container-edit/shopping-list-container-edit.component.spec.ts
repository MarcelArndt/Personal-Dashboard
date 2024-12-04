import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListContainerEditComponent } from './shopping-list-container-edit.component';

describe('ShoppingListContainerEditComponent', () => {
  let component: ShoppingListContainerEditComponent;
  let fixture: ComponentFixture<ShoppingListContainerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListContainerEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListContainerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
