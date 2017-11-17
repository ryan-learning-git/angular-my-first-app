import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment003Component } from './assignment003.component';

describe('Assignment003Component', () => {
  let component: Assignment003Component;
  let fixture: ComponentFixture<Assignment003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
