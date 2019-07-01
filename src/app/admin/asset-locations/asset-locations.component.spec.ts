import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLocationsComponent } from './asset-locations.component';

describe('AssetLocationsComponent', () => {
  let component: AssetLocationsComponent;
  let fixture: ComponentFixture<AssetLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
