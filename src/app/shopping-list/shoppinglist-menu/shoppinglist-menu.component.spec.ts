import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistMenuComponent } from './shoppinglist-menu.component';

describe('ShoppinglistMenuComponent', () => {
  let component: ShoppinglistMenuComponent;
  let fixture: ComponentFixture<ShoppinglistMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppinglistMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppinglistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
