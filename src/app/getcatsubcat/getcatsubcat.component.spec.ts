import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcatsubcatComponent } from './getcatsubcat.component';

describe('GetcatsubcatComponent', () => {
  let component: GetcatsubcatComponent;
  let fixture: ComponentFixture<GetcatsubcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcatsubcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcatsubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
