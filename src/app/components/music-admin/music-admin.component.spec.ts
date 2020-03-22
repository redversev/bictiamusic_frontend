import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAdminComponent } from './music-admin.component';

describe('MusicAdminComponent', () => {
  let component: MusicAdminComponent;
  let fixture: ComponentFixture<MusicAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
