import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Children4Component } from './children4.component';

describe('Children4Component', () => {
  let component: Children4Component;
  let fixture: ComponentFixture<Children4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Children4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Children4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
