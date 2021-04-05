import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTheCarComponent } from './rent-the-car.component';

describe('RentTheCarComponent', () => {
  let component: RentTheCarComponent;
  let fixture: ComponentFixture<RentTheCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentTheCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
