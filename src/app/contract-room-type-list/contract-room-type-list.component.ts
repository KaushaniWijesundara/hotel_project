import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomType } from '../room-type'; 
import { RoomTypeService } from '../room-type.service'; 

@Component({
  selector: 'app-contract-room-type-list',
  templateUrl: './contract-room-type-list.component.html',
  styleUrls: ['./contract-room-type-list.component.css']
})
export class ContractRoomTypeListComponent implements OnInit {
  roomTypes: RoomType[] = [];
  hotelContractId!: number;

  constructor(
    private roomTypeService: RoomTypeService, 
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    // Get the hotelContractId from the route parameters
    this.route.params.subscribe(params => {
      this.hotelContractId = +params['hotelContractId'];
      this.loadRoomTypes(); // Fetch room types for the selected hotel contract
    });
  }

  loadRoomTypes() {
    // Fetch room types for the selected hotel contract using the service
    this.roomTypeService.getRoomTypesByContractId(this.hotelContractId).subscribe(data => {
      this.roomTypes = data;
    });
  }
}
