import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDashComponent } from './generic-dash.component';

describe('GenericDashComponent', () => {
  let component: GenericDashComponent;
  let fixture: ComponentFixture<GenericDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
