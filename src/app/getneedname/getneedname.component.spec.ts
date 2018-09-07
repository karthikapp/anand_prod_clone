import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetneednameComponent } from './getneedname.component';

describe('GetneednameComponent', () => {
  let component: GetneednameComponent;
  let fixture: ComponentFixture<GetneednameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetneednameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetneednameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
