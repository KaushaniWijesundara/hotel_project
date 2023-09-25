import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HotelContract } from './hotel-contract';

@Injectable({
  providedIn: 'root'
})
export class HotelContractService {

  private baseURL = "http://localhost:8080/api/v1/hotelContracts";
  constructor(private httpClient: HttpClient ) { }

  getHotelContractList() : Observable<HotelContract[]>{
    return this.httpClient.get<HotelContract[]>(`${this.baseURL}`);
  }

  createHotelContract(hotelContract: HotelContract): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hotelContract);
  }

  getHotelContractById(id: number): Observable<HotelContract>{
    return this.httpClient.get<HotelContract>(`${this.baseURL}/${id}`);
  }

  updateHotelContract(id: number, hotelContract: HotelContract): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, hotelContract);
  }

  deleteHotelContract(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
