import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesFavoritasComponent } from './canciones-favoritas.component';

describe('CancionesFavoritasComponent', () => {
  let component: CancionesFavoritasComponent;
  let fixture: ComponentFixture<CancionesFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
