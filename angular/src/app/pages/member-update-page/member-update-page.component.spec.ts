import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberUpdatePageComponent } from './member-update-page.component';

describe('MemberUpdatePageComponent', () => {
  let component: MemberUpdatePageComponent;
  let fixture: ComponentFixture<MemberUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
