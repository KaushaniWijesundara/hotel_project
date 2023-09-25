import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelContractListComponent } from './hotel-contract-list/hotel-contract-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateHotelContractComponent } from './create-hotel-contract/create-hotel-contract.component';
import { FormsModule } from '@angular/forms';
import { UpdateHotelContractComponent } from './update-hotel-contract/update-hotel-contract.component';
import { CreateRoomTypesComponent } from './create-room-types/create-room-types.component';
import { RoomTypeListComponent } from './room-type-list/room-type-list.component';
import { UpdateRoomTypeComponent } from './update-room-type/update-room-type.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { HotelUpdateComponent } from './hotel-update/hotel-update.component';
import { RoomTypeSearchComponent } from './room-type-search/room-type-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContractRoomTypeListComponent } from './contract-room-type-list/contract-room-type-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HotelContractListComponent,
    CreateHotelContractComponent,
    UpdateHotelContractComponent,
    CreateRoomTypesComponent,
    RoomTypeListComponent,
    UpdateRoomTypeComponent,
    CreateBookingComponent,
    UpdateBookingComponent,
    BookingListComponent,
    HotelListComponent,
    HotelCreateComponent,
    HotelUpdateComponent,
    RoomTypeSearchComponent,
    ContractRoomTypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    NgSelectModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
