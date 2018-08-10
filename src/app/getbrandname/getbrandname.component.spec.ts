import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbrandnameComponent } from './getbrandname.component';

describe('GetbrandnameComponent', () => {
  let component: GetbrandnameComponent;
  let fixture: ComponentFixture<GetbrandnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbrandnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbrandnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
