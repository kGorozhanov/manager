import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantReportComponent } from './restourant-report.component';

describe('RestourantReportComponent', () => {
  let component: RestourantReportComponent;
  let fixture: ComponentFixture<RestourantReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
