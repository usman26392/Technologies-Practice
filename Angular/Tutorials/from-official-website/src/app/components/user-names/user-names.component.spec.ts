import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNamesComponent } from './user-names.component';

describe('UserNamesComponent', () => {
  let component: UserNamesComponent;
  let fixture: ComponentFixture<UserNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
