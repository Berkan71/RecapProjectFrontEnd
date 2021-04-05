import { Component, OnInit } from '@angular/core';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rental/rent.service';

@Component({
  selector: 'app-rent-the-car',
  templateUrl: './rent-the-car.component.html',
  styleUrls: ['./rent-the-car.component.css']
})
export class RentTheCarComponent implements OnInit {

  rentItems: RentItem[]=[];

  constructor(private rentService:RentService) { }

  ngOnInit(): void { 
    this.rentTheCar();
  }

  rentTheCar(){
    this.rentItems = this.rentService.list();
  }

}
