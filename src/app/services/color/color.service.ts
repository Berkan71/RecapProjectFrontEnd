import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44312/api/colors/";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl + "getall");
  }

  add(color:Color):Observable<ResponseModel>{
    let apiUrl = this.apiUrl +'add';
    return this.httpClient.post<ResponseModel>(apiUrl,color)
  }

  getColor(colorId:Number):Observable<ItemResponseModel<Color>>{
    let apiUrl = this.apiUrl +'getbyid?id='+colorId;
    return this.httpClient.get<ItemResponseModel<Color>>(apiUrl);
  }
  update(Color:Color):Observable<ResponseModel>{
    let apiUrl = this.apiUrl +'update';
    return this.httpClient.post<ResponseModel>(apiUrl,Color)
  }
}
