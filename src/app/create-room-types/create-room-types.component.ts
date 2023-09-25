import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomType } from '../room-type';
import { RoomTypeService } from '../room-type.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-room-types',
  templateUrl: './create-room-types.component.html',
  styleUrls: ['./create-room-types.component.css']
})
export class CreateRoomTypesComponent implements OnInit {
  roomType: RoomType = new RoomType();
  contractId!: number;
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;

  @ViewChild('roomTypeForm') roomTypeForm!: NgForm; //access the form

  constructor(
    private roomTypeService: RoomTypeService, // InjecT RoomType service
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the contractId from the route parameter
    this.route.params.subscribe(params => {
      this.contractId = +params['contractId'];
    });
  }

  onSubmit(): void {
    if (!this.roomTypeForm.valid || this.roomType.availableRooms > this.roomType.noOfRooms) {
      // Form is invalid show error alert
      alert('Error Creating HoteRoom Typel!');
      return;
    }

    // Set the contractId for the room type
    this.roomType.contractId = this.contractId;

    // Call the service to create the room type
    this.roomTypeService.createRoomType(this.roomType, this.contractId).subscribe(data => {
      console.log(data);
      // After successful creation show success alert and reset form
      alert('Room Type successfully added!');
      this.roomTypeForm.resetForm();
      this.router.navigate([`/hotelContracts`]);
    });
  }
}
