import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44312/api/brands/";

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl + "getall");
  }

  add(brand: Brand): Observable<ResponseModel> {
    let apiUrl = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(apiUrl, brand)
  }

  update(brand: Brand): Observable<ResponseModel> {
    let apiUrl = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(apiUrl, brand)
  }
  getBrand(brandId: Number): Observable<ItemResponseModel<Brand>> {
    let apiUrl = this.apiUrl + 'getbyid?id=' + brandId;
    return this.httpClient.get<ItemResponseModel<Brand>>(apiUrl);
  }
}
