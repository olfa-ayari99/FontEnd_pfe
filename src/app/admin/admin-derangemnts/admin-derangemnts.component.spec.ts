import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDerangemntsComponent } from './admin-derangemnts.component';

describe('AdminDerangemntsComponent', () => {
  let component: AdminDerangemntsComponent;
  let fixture: ComponentFixture<AdminDerangemntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDerangemntsComponent]
    });
    fixture = TestBed.createComponent(AdminDerangemntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
