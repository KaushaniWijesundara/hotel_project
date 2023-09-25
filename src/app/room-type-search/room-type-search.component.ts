import { Component, EventEmitter, Output } from '@angular/core';
import { RoomType } from '../room-type';
import { RoomTypeSearchCriteria } from '../room-type-search-criteria';
import { RoomTypeService } from '../room-type.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-room-type-search',
  templateUrl: './room-type-search.component.html',
  styleUrls: ['./room-type-search.component.css']
})
export class RoomTypeSearchComponent {
  // EventEmitter for emitting search results
  @Output() searchComplete: EventEmitter<RoomType[][]> = new EventEmitter<RoomType[][]>();

  commonSearchCriteria: RoomTypeSearchCriteria = new RoomTypeSearchCriteria(); // Common search criteria
  roomTypeResults: RoomType[][] = [];

  roomTypeSearchCriteriaList: RoomTypeSearchCriteria[] = [new RoomTypeSearchCriteria()]; // Initialize with one room

  constructor(private roomTypeService: RoomTypeService) { }

  addRoom() {
    // Add a new room search criteria
    this.roomTypeSearchCriteriaList.push(new RoomTypeSearchCriteria());
  }

  removeRoom(index: number) {
    // Remove a room search criteria
    this.roomTypeSearchCriteriaList.splice(index, 1);
    this.roomTypeResults.splice(index, 1);
  }

  searchRoomTypes() {
    // Check if Number of Rooms or Number of Adults fields are empty
    const isInvalidInput = this.roomTypeSearchCriteriaList.some((criteria) => {
      return (
        criteria.numberOfRooms === undefined ||
        criteria.numberOfAdults === undefined ||
        criteria.numberOfRooms <= 0 ||
        criteria.numberOfAdults <= 0
      );
    });

    if (isInvalidInput) {
      console.error('Invalid input. Please fill in all required fields.');
      alert('Please fill all fields of the rooms added! ');
      return;
    }

    // common search criteria for all rooms
    this.roomTypeSearchCriteriaList.forEach((criteria) => {
      criteria.checkInDate = this.commonSearchCriteria.checkInDate;
      criteria.numberOfNights = this.commonSearchCriteria.numberOfNights;
    });

    // array to hold observables for each room's search
    const observables = this.roomTypeSearchCriteriaList.map((criteria) =>
      this.roomTypeService.searchRoomTypes(criteria)
    );

    // forkJoin to make parallel requests for each room
    forkJoin(observables).subscribe(
      (data) => {
        // Emit the search results to the parent component
        this.roomTypeResults = data;
        this.searchComplete.emit(this.roomTypeResults);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    if (this.roomTypeResults.length === 0) {
      // Emit an empty array to clear the results
      this.searchComplete.emit([]);
    }
  }

  isPreviousRoomFilled(): boolean {
    const lastIndex = this.roomTypeSearchCriteriaList.length - 1;
    if (lastIndex < 0) {
      // No previous room, so allow adding a new room
      return true;
    }

    const previousCriteria = this.roomTypeSearchCriteriaList[lastIndex];
    // Check if the input fields of the previous room are filled
    return (
      previousCriteria.numberOfRooms !== undefined &&
      previousCriteria.numberOfAdults !== undefined
    );
  }
}
