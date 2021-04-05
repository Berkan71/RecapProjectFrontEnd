import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44312/api/rentals/";
  constructor(private httpClient:HttpClient) { }

  
  getRentals():Observable<ListResponseModel<Rental>>{

    let newPath = this.apiUrl +  "rentals/getrentaldetailsdto";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);

  }

  checkIfCarRent(rental: Rental): Observable<ListResponseModel<Rental>> {
    return this.httpClient.post<ListResponseModel<Rental>>(this.apiUrl + "add", rental);
  }
  
}
