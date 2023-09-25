import { Component, OnInit } from '@angular/core';
import { HotelContract } from '../hotel-contract';
import { HotelContractService } from '../hotel-contract.service';
import { HotelService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-hotel-contract',
  templateUrl: './update-hotel-contract.component.html',
  styleUrls: ['./update-hotel-contract.component.css']
})
export class UpdateHotelContractComponent implements OnInit {
  hotelContract: HotelContract = new HotelContract();
  hotels: any[] = [];
  id!: number;

  constructor(
    private hotelContractService: HotelContractService,
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadHotels();
    this.hotelContractService.getHotelContractById(this.id).subscribe(
      (data) => {
        this.hotelContract = data;
      },
      (error) => console.log(error)
    );
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

  updateHotelContract() {

    this.hotelContractService.updateHotelContract(this.id, this.hotelContract).subscribe(
      (data) => {
        const confirmation = confirm('Are you sure you want to update the contract?'); // Display a confirmation dialog

        if (confirmation) {
          console.log(data);
          this.hotelContract = new HotelContract();
          this.goToHotelContractList();
          alert("Hotel Contract Edited!");
        }
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
    this.updateHotelContract();
  }
}
