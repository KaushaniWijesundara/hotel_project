import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeSearchComponent } from './room-type-search.component';

describe('RoomTypeSearchComponent', () => {
  let component: RoomTypeSearchComponent;
  let fixture: ComponentFixture<RoomTypeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeSearchComponent]
    });
    fixture = TestBed.createComponent(RoomTypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
