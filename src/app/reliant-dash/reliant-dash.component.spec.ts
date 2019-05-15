import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliantDashComponent } from './reliant-dash.component';

describe('ReliantDashComponent', () => {
  let component: ReliantDashComponent;
  let fixture: ComponentFixture<ReliantDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliantDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
