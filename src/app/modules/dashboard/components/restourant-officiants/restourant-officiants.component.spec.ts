import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantOfficiantsComponent } from './restourant-officiants.component';

describe('RestourantOfficiantsComponent', () => {
  let component: RestourantOfficiantsComponent;
  let fixture: ComponentFixture<RestourantOfficiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantOfficiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantOfficiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
