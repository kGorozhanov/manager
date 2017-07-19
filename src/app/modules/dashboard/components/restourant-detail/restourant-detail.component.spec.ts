import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantDetailComponent } from './restourant-detail.component';

describe('RestourantDetailComponent', () => {
  let component: RestourantDetailComponent;
  let fixture: ComponentFixture<RestourantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
