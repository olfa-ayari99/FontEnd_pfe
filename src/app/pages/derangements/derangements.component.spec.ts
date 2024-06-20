import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerangementsComponent } from './derangements.component';

describe('DerangementsComponent', () => {
  let component: DerangementsComponent;
  let fixture: ComponentFixture<DerangementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerangementsComponent]
    });
    fixture = TestBed.createComponent(DerangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
