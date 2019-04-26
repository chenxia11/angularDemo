import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Children3Component } from './children3.component';

describe('Children3Component', () => {
  let component: Children3Component;
  let fixture: ComponentFixture<Children3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Children3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Children3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
