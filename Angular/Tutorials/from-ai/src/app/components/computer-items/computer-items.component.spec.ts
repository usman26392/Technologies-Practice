import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerItemsComponent } from './computer-items.component';

describe('ComputerItemsComponent', () => {
  let component: ComputerItemsComponent;
  let fixture: ComponentFixture<ComputerItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
