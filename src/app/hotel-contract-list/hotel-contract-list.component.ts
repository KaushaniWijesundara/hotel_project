import { Component, OnInit } from '@angular/core';
import { HotelContract } from '../hotel-contract';
import { HotelContractService } from '../hotel-contract.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hotel-contract-list',
  templateUrl: './hotel-contract-list.component.html',
  styleUrls: ['./hotel-contract-list.component.css']
})
export class HotelContractListComponent implements OnInit {
  hotelContracts!: HotelContract[];
  p: number = 1; // Current page
  itemsPerPage: number = 10; // Number of items per page
  searchTerm: string = ''; // store the search term

  constructor(private hotelContractService: HotelContractService, private router: Router) { }

  ngOnInit(): void {
    this.getHotelContracts();
  }

  private getHotelContracts() {
    this.hotelContractService.getHotelContractList().subscribe(data => {
      this.hotelContracts = data;
    });
  }

  updateHotelContract(id: number) {
    this.router.navigate(['update-hotel-contract', id]);
  }

  deleteHotelContract(id: number) {
    const confirmation = confirm('Are you sure you want to delete the contract?'); // Display a confirmation dialog

    if (confirmation) {
      this.hotelContractService.deleteHotelContract(id).subscribe(data => {
        console.log(data);
        this.getHotelContracts();
      });
    }
  }

  addRoomTypes(contractId: number) {
    this.router.navigate(['create-room-types', contractId]);
  }

  viewAllRoomTypes(): void {
    this.router.navigate(['/room-types']);
  }

  viewRoomTypes(hotelContractId: number) {
    this.router.navigate(['/contract-room-types', hotelContractId]);
  }

  addHotelContract() {
    this.router.navigate(['/create-hotel-contract']);
  }

  // handle the search
  search(): void {
    // Filter the hotelContracts based on the search term
    this.hotelContracts = this.hotelContracts.filter(contract => {
      return contract.hotel.hotelName.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    // Reset the pagination to the first page
    this.p = 1;
  }
}
