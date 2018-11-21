import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowSuccessPageComponent } from './borrow-success-page.component';

describe('BorrowSuccessPageComponent', () => {
  let component: BorrowSuccessPageComponent;
  let fixture: ComponentFixture<BorrowSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
