import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDeliverPageComponent } from './borrow-deliver-page.component';

describe('BorrowDeliverPageComponent', () => {
  let component: BorrowDeliverPageComponent;
  let fixture: ComponentFixture<BorrowDeliverPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowDeliverPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowDeliverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
