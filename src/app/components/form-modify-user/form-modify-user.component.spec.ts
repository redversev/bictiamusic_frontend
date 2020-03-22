import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyUserComponent } from './form-modify-user.component';

describe('FormModifyUserComponent', () => {
  let component: FormModifyUserComponent;
  let fixture: ComponentFixture<FormModifyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModifyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
