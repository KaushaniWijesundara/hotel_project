import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookingService.getBookingList()
      .subscribe((data) => {
        this.bookings = data;
      }, (error) => {
        console.error('Error loading bookings:', error);
      });
  }

  createNewBooking(): void {
    this.router.navigate(['/create-booking']);
  }

  updateBooking(bookingId: number): void {
    this.router.navigate(['/update-booking', bookingId]);
  }

  confirmDelete(bookingId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this booking?');

    if (confirmDelete) {
      // User confirmed, perform the deletion
      this.deleteBooking(bookingId);
    }
  }

  deleteBooking(bookingId: number) {
    this.bookingService.deleteBooking(bookingId).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
        // Handle error if deletion fails
        console.error('Error deleting booking:', error);
      }
    );
  }
}
