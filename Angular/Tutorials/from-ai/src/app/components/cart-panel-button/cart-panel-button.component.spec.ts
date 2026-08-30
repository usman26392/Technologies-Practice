import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPanelButtonComponent } from './cart-panel-button.component';

describe('CartPanelButtonComponent', () => {
  let component: CartPanelButtonComponent;
  let fixture: ComponentFixture<CartPanelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPanelButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPanelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
