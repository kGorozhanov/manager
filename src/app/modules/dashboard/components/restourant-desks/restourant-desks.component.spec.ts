import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantDesksComponent } from './restourant-desks.component';

describe('RestourantDesksComponent', () => {
  let component: RestourantDesksComponent;
  let fixture: ComponentFixture<RestourantDesksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantDesksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantDesksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
