import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowRecordPageComponent } from './borrow-record-page.component';

describe('BorrowRecordPageComponent', () => {
  let component: BorrowRecordPageComponent;
  let fixture: ComponentFixture<BorrowRecordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowRecordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
