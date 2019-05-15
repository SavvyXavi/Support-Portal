import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelusDashComponent } from './relus-dash.component';

describe('RelusDashComponent', () => {
  let component: RelusDashComponent;
  let fixture: ComponentFixture<RelusDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelusDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelusDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
