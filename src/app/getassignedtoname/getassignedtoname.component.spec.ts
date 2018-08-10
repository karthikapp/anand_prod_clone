import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetassignedtonameComponent } from './getassignedtoname.component';

describe('GetassignedtonameComponent', () => {
  let component: GetassignedtonameComponent;
  let fixture: ComponentFixture<GetassignedtonameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetassignedtonameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetassignedtonameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
