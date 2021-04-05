import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl ="https://localhost:44312/api/customers/";
  constructor(private httpClient:HttpClient) { }

  // apiUrl = environment.apiUrl +'customers/getcustomerdetail'
  // constructor(private httpClient:HttpClient) { }
  // getCustomer(): Observable<ListResponseModel<Customer>>{
  //   return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  // }

  getCustomers():Observable<ListResponseModel<Customer>>{
    //return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + 'getall');
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + 'getcustomerdetail');
  }

  getCustomerById(customerId: number): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'getcustomerdetailbycustomerid?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
