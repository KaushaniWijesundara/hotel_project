import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent implements OnInit {
  hotel!: Hotel;
  hotelId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = +params['id']; // Get the hotel ID from the route
      this.getHotelDetails();
    });
  }

  getHotelDetails(): void {
    this.hotelService.getHotelById(this.hotelId).subscribe(hotel => {
      this.hotel = hotel;
    });
  }

  updateHotel(): void {
    if (!this.hotel.hotelName || !this.hotel.city) {
      alert('All Fields Are Required!!');
      return;
    }

    const confirmation = confirm('Are you sure you want to update the hotel?'); // Display a confirmation dialog

    if (confirmation) {
      this.hotelService.updateHotel(this.hotelId, this.hotel).subscribe(() => {
        this.router.navigate(['/hotels']);
        alert('Hotel successfully Updated!');
      });
    }
  }

  goToHotelList() {
    this.router.navigate(['/hotels']);
  }
}
