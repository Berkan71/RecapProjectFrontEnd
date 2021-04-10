import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/car-image/car-image';
import { ResponseModel } from 'src/app/models/responseModel';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44312/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetails'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "getimagesbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarsByBrandAndColorId(brandId:number, colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandandcolorid?brandId="+brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    console.log("serviste")
    let apiUrl = this.apiUrl +'cars/add';
    return this.httpClient.post<ResponseModel>(apiUrl,car)
  }

  getCar(id:Number):Observable<ItemResponseModel<Car>>{
    let apiUrl = this.apiUrl +'cars/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Car>>(apiUrl);
  }
  update(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl +'cars/update';
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
