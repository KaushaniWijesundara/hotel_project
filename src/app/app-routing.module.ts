import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelContract } from './hotel-contract';
import { HotelContractListComponent } from './hotel-contract-list/hotel-contract-list.component';
import { CreateHotelContractComponent } from './create-hotel-contract/create-hotel-contract.component';
import { UpdateHotelContractComponent } from './update-hotel-contract/update-hotel-contract.component';
import { CreateRoomTypesComponent } from './create-room-types/create-room-types.component';
import { RoomTypeListComponent } from './room-type-list/room-type-list.component';
import { UpdateRoomTypeComponent } from './update-room-type/update-room-type.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelUpdateComponent } from './hotel-update/hotel-update.component';
import { RoomTypeSearchComponent } from './room-type-search/room-type-search.component';
import { ContractRoomTypeListComponent } from './contract-room-type-list/contract-room-type-list.component';


const routes: Routes = [
  { path: 'hotelContracts', component: HotelContractListComponent },
  { path: 'create-hotel-contract', component: CreateHotelContractComponent },
  { path: '', redirectTo: 'hotelContracts', pathMatch: 'full' },
  { path: 'update-hotel-contract/:id', component: UpdateHotelContractComponent },
  { path: 'create-room-types/:contractId', component: CreateRoomTypesComponent },
  { path: 'room-types', component: RoomTypeListComponent },
  { path: 'room-types/:hotelContractId', component: RoomTypeListComponent },
  { path: 'update-room-type/:roomTypeId', component: UpdateRoomTypeComponent },
  { path: 'booking-list', component: BookingListComponent },
  { path: 'create-booking', component: CreateBookingComponent },
  { path: 'update-booking/:id', component: UpdateBookingComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/create', component: HotelCreateComponent },
  { path: 'hotels/update/:id', component: HotelUpdateComponent },
  { path: 'room-type-search', component: RoomTypeSearchComponent },
  { path: 'contract-room-types/:hotelContractId', component: ContractRoomTypeListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
