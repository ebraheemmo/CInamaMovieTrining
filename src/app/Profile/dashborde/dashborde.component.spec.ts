import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordeComponent } from './dashborde.component';

describe('DashbordeComponent', () => {
  let component: DashbordeComponent;
  let fixture: ComponentFixture<DashbordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
