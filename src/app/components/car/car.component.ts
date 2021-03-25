import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carLoaded = false;
  currentCar : Car;
  imageBasePath = environment.baseUrl
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      } else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      } else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=> {
      this.cars = response.data
      this.carLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=> {
      this.cars = response.data
      this.carLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=> {
      this.cars = response.data
      this.carLoaded = true;
    })
  }

  // getCarImageClass(car:Car){
  //   let path = (car.imagePath).replace("unsafe:","")
  //   if(car == this.currentCar){
  //     return path;
  //   }else {
  //     return path;
  //   }
  // }
}
