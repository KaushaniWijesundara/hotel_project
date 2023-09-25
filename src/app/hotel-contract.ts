import { Hotel } from './hotel'; 

export class HotelContract {
    id!: number;
    hotel: Hotel = new Hotel(); 
    contractStartDate!: Date;
    contractEndDate!: Date;
}
