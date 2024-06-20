import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDerangementComponent } from './new-derangement.component';

describe('NewDerangementComponent', () => {
  let component: NewDerangementComponent;
  let fixture: ComponentFixture<NewDerangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDerangementComponent]
    });
    fixture = TestBed.createComponent(NewDerangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
