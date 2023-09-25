import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelContractComponent } from './create-hotel-contract.component';

describe('CreateHotelContractComponent', () => {
  let component: CreateHotelContractComponent;
  let fixture: ComponentFixture<CreateHotelContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotelContractComponent]
    });
    fixture = TestBed.createComponent(CreateHotelContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
