import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})

export class HotelCreateComponent {
  hotel: Hotel = new Hotel();

  constructor(private hotelService: HotelService,
    private router: Router,
    private toastr: ToastrService) { }

  createHotel(): void {
    if (!this.hotel.hotelName || !this.hotel.city) {
      alert('All Fields Are Required!!');
      return;
    }

    this.hotelService.createHotel(this.hotel).subscribe(() => {
      // Navigate and show success alert when the hotel is added successfully
      this.router.navigate(['/hotels']);
      alert('Hotel successfully added!');
    });
  }


  goToHotelList() {
    this.router.navigate(['/hotels']);
  }



}


//