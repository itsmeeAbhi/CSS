import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDirComponent } from './first-dir.component';

describe('FirstDirComponent', () => {
  let component: FirstDirComponent;
  let fixture: ComponentFixture<FirstDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
