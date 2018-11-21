import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowEndConfirmPageComponent } from './borrow-end-confirm-page.component';

describe('BorrowEndConfirmPageComponent', () => {
  let component: BorrowEndConfirmPageComponent;
  let fixture: ComponentFixture<BorrowEndConfirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowEndConfirmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowEndConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
