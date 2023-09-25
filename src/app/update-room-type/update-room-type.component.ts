import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomType } from '../room-type';
import { RoomTypeService } from '../room-type.service';

@Component({
  selector: 'app-update-room-type',
  templateUrl: './update-room-type.component.html',
  styleUrls: ['./update-room-type.component.css']
})
export class UpdateRoomTypeComponent implements OnInit {
  roomType: RoomType = new RoomType();
  id!: number;
  contractId!: number;

  constructor(
    private roomTypeService: RoomTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the room type ID from the route parameter
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.contractId = +params['contractId'];
      this.getRoomTypeDetails();
    });
  }

  getRoomTypeDetails() {
    // Fetch room type details by roomTypeId
    this.roomTypeService.getRoomTypeById(this.id, this.contractId).subscribe(data => {
      this.roomType = data;
    });
  }

  updateRoomType() {
    console.log('roomType:', this.roomType);
    // Call the service to update the room type, passing the contractId
    this.roomTypeService.updateRoomType(this.roomType, this.contractId).subscribe(data => {
      console.log(data);
      // After successful update, navigate back to the room type list or another appropriate page
      this.router.navigate(['/room-types', this.contractId]);
    });
  }
}
