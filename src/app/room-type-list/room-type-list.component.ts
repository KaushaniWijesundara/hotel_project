import { Component, OnInit } from '@angular/core';
import { RoomType } from '../room-type';
import { RoomTypeService } from '../room-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {
  roomTypes: RoomType[] = [];
  selectedHotelContractId!: number;
  roomTypeResults: RoomType[][] = [];
  currentRoomIndex: number = 0;
  numberOfRoomsInSearch: number = 0;

  constructor(
    private roomTypeService: RoomTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the selectedHotelContractId from the route parameter
    this.route.params.subscribe(params => {
      this.selectedHotelContractId = +params['hotelContractId'];
      // Fetch all room types
      this.getAllRoomTypes();
    });
  }

  private getAllRoomTypes() {
    if (this.selectedHotelContractId !== null) {
      // Fetch room types filtered by hotelContractId
      this.roomTypeService.getRoomTypesByContractId(this.selectedHotelContractId).subscribe(data => {
        this.roomTypeResults = [data];
      });
    } else {
      // Fetch all room types without specifying a hotelContractId
      this.roomTypeService.getAllRoomTypes().subscribe(data => {
        this.roomTypeResults = [data];
      });
    }
  }

  updateRoomType(roomType: RoomType) {
    // Redirect to the update-room-type component with the room type ID
    this.router.navigate(['/update-room-type', roomType.id]);
  }

  deleteRoomType(roomTypeId: number) {
    if (confirm('Are you sure you want to delete this room type?')) {
      this.roomTypeService.deleteRoomType(roomTypeId, this.selectedHotelContractId).subscribe(() => {
        // After successful deletion refresh the room type list
        this.getAllRoomTypes();
      });
    }
  }

  // Handle search results
  handleSearchResult(roomTypes: RoomType[][]) {
    this.roomTypeResults = roomTypes;
  }

  // functions for pagination
  previousRoom() {
    if (this.roomTypeResults?.length && this.currentRoomIndex > 0) {
      this.currentRoomIndex--;
    }
  }

  nextRoom() {
    if (this.roomTypeResults?.length && this.currentRoomIndex < this.roomTypeResults.length - 1) {
      this.currentRoomIndex++;
    }
  }

  // isRoomTypeAvailable function to check room type availability
  isRoomTypeAvailable(roomType: RoomType, numberOfRoomsInSearch: number): boolean {
    // Check if the available rooms are greater than or equal to the number of rooms in the search
    return roomType.availableRooms >= numberOfRoomsInSearch;
  }
}
