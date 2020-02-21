import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapniesTableComponent } from './comapnies-table.component';

describe('ComapniesTableComponent', () => {
  let component: ComapniesTableComponent;
  let fixture: ComponentFixture<ComapniesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapniesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapniesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
