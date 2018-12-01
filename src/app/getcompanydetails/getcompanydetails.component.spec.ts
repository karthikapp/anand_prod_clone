import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompanydetailsComponent } from './getcompanydetails.component';

describe('GetcompanydetailsComponent', () => {
  let component: GetcompanydetailsComponent;
  let fixture: ComponentFixture<GetcompanydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompanydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
