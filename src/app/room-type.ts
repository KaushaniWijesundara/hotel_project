export class RoomType {
    id!: number;
    roomType!: string;
    pricePerPerson!: number;
    maxAdults!: number;
    noOfRooms!: number;
    availableRooms!: number;
    contractId!: number; 
    price!: number; 
  markup!: number;
  totalPrice!: number;
  contract!: {
    id: number;
    hotel:{
      id:number;
      hotelName: string;
      city: string;
    }
  };
  }