import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  p: number = 1; // Current page number
  itemsPerPage: number = 20; // Number of items to show per page

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
    });
  }

  deleteHotel(id: number): void {
    const confirmation = confirm('Are you sure you want to delete the hotel?');

    if (confirmation) {
      this.hotelService.deleteHotel(id).subscribe(() => {
        // Refresh the list after deleting
        this.getHotels();
        alert('Hotel successfully Deleted!');
      });
    }
  }
}
