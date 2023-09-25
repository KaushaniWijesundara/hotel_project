import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = new Booking();

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.bookingService.createBooking(this.booking)
      .subscribe(() => {
        // Handle success (e.g., show a success message)
        console.log('Booking created successfully');
        // Clear the form
        this.booking = new Booking();
        this.goToBookingList();
      }, (error) => {
        // Handle error (e.g., show an error message)
        console.error('Error creating booking:', error);
      });
  }

  goToBookingList(){
    this.router.navigate(['/booking-list']);
  }
}