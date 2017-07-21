import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantMenuComponent } from './restourant-menu.component';

describe('RestourantMenuComponent', () => {
  let component: RestourantMenuComponent;
  let fixture: ComponentFixture<RestourantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
