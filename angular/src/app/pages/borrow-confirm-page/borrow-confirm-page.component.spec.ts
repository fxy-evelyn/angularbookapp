import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowConfirmPageComponent } from './borrow-confirm-page.component';

describe('BorrowConfirmPageComponent', () => {
  let component: BorrowConfirmPageComponent;
  let fixture: ComponentFixture<BorrowConfirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowConfirmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
