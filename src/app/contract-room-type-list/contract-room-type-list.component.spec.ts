import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractRoomTypeListComponent } from './contract-room-type-list.component';

describe('ContractRoomTypeListComponent', () => {
  let component: ContractRoomTypeListComponent;
  let fixture: ComponentFixture<ContractRoomTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractRoomTypeListComponent]
    });
    fixture = TestBed.createComponent(ContractRoomTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
