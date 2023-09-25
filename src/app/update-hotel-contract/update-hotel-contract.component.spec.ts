import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelContractComponent } from './update-hotel-contract.component';

describe('UpdateHotelContractComponent', () => {
  let component: UpdateHotelContractComponent;
  let fixture: ComponentFixture<UpdateHotelContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHotelContractComponent]
    });
    fixture = TestBed.createComponent(UpdateHotelContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
