import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDirComponent } from './second-dir.component';

describe('SecondDirComponent', () => {
  let component: SecondDirComponent;
  let fixture: ComponentFixture<SecondDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
