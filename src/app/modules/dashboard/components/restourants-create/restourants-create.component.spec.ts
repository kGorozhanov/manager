import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantsCreateComponent } from './restourants-create.component';

describe('RestourantsCreateComponent', () => {
  let component: RestourantsCreateComponent;
  let fixture: ComponentFixture<RestourantsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestourantsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
