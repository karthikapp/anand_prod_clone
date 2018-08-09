import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproductnameComponent } from './getproductname.component';

describe('GetproductnameComponent', () => {
  let component: GetproductnameComponent;
  let fixture: ComponentFixture<GetproductnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetproductnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetproductnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
