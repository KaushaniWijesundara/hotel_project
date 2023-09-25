import { Component, OnInit } from '@angular/core';
import { HotelContract } from '../hotel-contract';
import { HotelContractService } from '../hotel-contract.service';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-create-hotel-contract',
  templateUrl: './create-hotel-contract.component.html',
  styleUrls: ['./create-hotel-contract.component.css']
})
export class CreateHotelContractComponent implements OnInit {
  hotelContract: HotelContract = new HotelContract();
  hotels: any[] = [];

  filterTerm$: Subject<string> = new Subject<string>();
  filteredHotels: any[] = [];


  constructor(
    private hotelContractService: HotelContractService,
    private hotelService: HotelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadHotels();

    // Subscribe to filterTerm$ and apply the filter
    this.filterHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(
      (data: any) => {
        this.hotels = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveHotelContract() {
    this.hotelContractService.createHotelContract(this.hotelContract).subscribe(
      (data) => {
        console.log(data);
        this.goToHotelContractList();
        alert("Hotel Contract Created Successfully!");
      },
      (error) => {
        console.log(error);
        // Display an alert message if the form submission fails
        alert("Submit failed! Please check your details again.");
      }
    );
  }

  goToHotelContractList() {
    this.router.navigate(['/hotelContracts']);
  }

  onSubmit() {
    console.log(this.hotelContract);
    this.saveHotelContract();
  }

  customFilter = (term: string, item: any) => {
    term = term.toLowerCase();
    return (
      item.hotelName.toLowerCase().includes(term) ||
      item.city.toLowerCase().includes(term) ||
      item.id.toString().includes(term)
    );
  };

  // Function to filter hotels based on user input
  filterHotels() {
    this.filterTerm$.subscribe((term) => {
      this.filteredHotels = this.hotels.filter((hotel) =>
        this.customFilter(term, hotel)
      );

      //  include a label property
      this.filteredHotels = this.filteredHotels.map((hotel) => ({
        ...hotel,
        label: `${hotel.id} - ${hotel.hotelName} (${hotel.city})`,
      }));
    });
  }
  getHotelLabel = (item: any) => {
    return `id - ${item.hotelName} (${item.city})`;
  }
}
