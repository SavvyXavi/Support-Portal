import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgopassComponent } from './forgopass.component';

describe('ForgopassComponent', () => {
  let component: ForgopassComponent;
  let fixture: ComponentFixture<ForgopassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgopassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
