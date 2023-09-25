import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  booking: Booking = new Booking();
  bookingId!: number;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the booking ID from the route parameter
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.bookingId = +idParam;
      this.bookingService.getBooking(this.bookingId)
        .subscribe((data) => {
          this.booking = data;
        }, (error) => {
          console.error('Error loading booking:', error);
        });
    } else {
      console.error('Booking ID parameter is null or undefined.');
    }
  }


  onSubmit(): void {
    this.bookingService.updateBooking(this.bookingId, this.booking)
      .subscribe(() => {
        console.log('Booking updated successfully');
        this.router.navigate(['/booking-list']);
      }, (error) => {
        console.error('Error updating booking:', error);
      });
  }
}
