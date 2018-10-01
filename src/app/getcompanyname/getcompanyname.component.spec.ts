import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompanynameComponent } from './getcompanyname.component';

describe('GetcompanynameComponent', () => {
  let component: GetcompanynameComponent;
  let fixture: ComponentFixture<GetcompanynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompanynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompanynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
