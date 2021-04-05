import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { RentItem } from 'src/app/models/rentItem';
import { RentItems } from 'src/app/models/rentItems';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor() { }

  rentTheCar(car:Car){
    let item = RentItems.find(c=>c.car.id === car.id);
    if(item){
      item.quantity+=1;
    } else{
      let rentItem = new RentItem();
      rentItem.car = car;
      rentItem.quantity=1;
      RentItems.push(rentItem)
    }
  }

  removeFromRent(car:Car){
    let item:RentItem = RentItems.find(c=>c.car.id === car.id);
    RentItems.splice(RentItems.indexOf(item),1);
  }

  list():RentItem[]{
    return RentItems;
  }
}
