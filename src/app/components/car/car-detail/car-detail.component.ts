import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car-image/car-image';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[] = [];
  carImages: CarImage[] = [];
  dataLoaded = false;
  imageBasePath = environment.baseUrl;
  carDetail:Car[];

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
      }
     
    });
  }

  getCarDetail(carId:number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(carId:number){
    this.carService.getImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
    })
  }
}
