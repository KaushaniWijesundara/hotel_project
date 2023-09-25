import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomType } from './room-type';
import { RoomTypeSearchCriteria } from './room-type-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  private baseURL = 'http://localhost:8080/api/v1/hotelContracts';
  constructor(private httpClient: HttpClient) { }

  // Fetch room types for a contract by contractId
  getRoomTypesByContractId(contractId: number): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(`${this.baseURL}/${contractId}/roomTypes`);
  }

  // Create a new room type
  createRoomType(roomType: RoomType, contractId: number): Observable<RoomType> {
    return this.httpClient.post<RoomType>(`${this.baseURL}/${contractId}/roomTypes`, roomType);
  }
  // Delete a room type by its ID
  deleteRoomType(id: number, contractId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/roomTypes/${id}`);
  }

  getRoomTypeList(contractId: number): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(`${this.baseURL}/${contractId}/roomTypes`);
  }

  getRoomTypeById(roomTypeId: number, contractId: number): Observable<RoomType> {
    const url = `${this.baseURL}/roomTypes/${roomTypeId}`;

    // Send a GET request to fetch the room type details
    return this.httpClient.get<RoomType>(url);
  }

  // Update a room type by its ID
  updateRoomType(roomType: RoomType, contractId: number): Observable<RoomType> {
    // Use the roomTypeId to construct the URL for the specific room type
    const url = `${this.baseURL}/roomTypes/${roomType.id}`;

    // Send a PUT request to update the room type
    return this.httpClient.put<RoomType>(url, roomType);
  }

  searchRoomTypes(searchCriteria: RoomTypeSearchCriteria): Observable<RoomType[]> {
    // Send a POST request to the backend API to search for room types
    return this.httpClient.post<RoomType[]>(`${this.baseURL}/roomTypes/search`, searchCriteria);
  }

  // Get all room types without specifying a hotelContractId
  getAllRoomTypes(): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(`${this.baseURL}/roomTypes`);
  }
}
