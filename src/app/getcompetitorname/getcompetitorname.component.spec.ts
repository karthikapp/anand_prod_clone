import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompetitornameComponent } from './getcompetitorname.component';

describe('GetcompetitornameComponent', () => {
  let component: GetcompetitornameComponent;
  let fixture: ComponentFixture<GetcompetitornameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompetitornameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompetitornameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
