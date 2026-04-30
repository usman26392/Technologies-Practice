import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenProductComponent } from './pen-product.component';

describe('PenProductComponent', () => {
  let component: PenProductComponent;
  let fixture: ComponentFixture<PenProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
