import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMonitorComponent } from './local-monitor.component';

describe('LocalMonitorComponent', () => {
  let component: LocalMonitorComponent;
  let fixture: ComponentFixture<LocalMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
