import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgtcalendarComponent } from './agtcalendar.component';

describe('AgtcalendarComponent', () => {
  let component: AgtcalendarComponent;
  let fixture: ComponentFixture<AgtcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgtcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgtcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
