import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelContractListComponent } from './hotel-contract-list.component';

describe('HotelContractListComponent', () => {
  let component: HotelContractListComponent;
  let fixture: ComponentFixture<HotelContractListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelContractListComponent]
    });
    fixture = TestBed.createComponent(HotelContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
