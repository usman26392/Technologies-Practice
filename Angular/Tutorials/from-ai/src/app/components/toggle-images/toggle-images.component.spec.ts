import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImagesComponent } from './toggle-images.component';

describe('ToggleImagesComponent', () => {
  let component: ToggleImagesComponent;
  let fixture: ComponentFixture<ToggleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
