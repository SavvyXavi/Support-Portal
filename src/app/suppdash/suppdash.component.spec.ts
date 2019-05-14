import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppdashComponent } from './suppdash.component';

describe('SuppdashComponent', () => {
  let component: SuppdashComponent;
  let fixture: ComponentFixture<SuppdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
