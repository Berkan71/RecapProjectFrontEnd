import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';
import { RentService } from 'src/app/services/rental/rent.service';
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
  filterCar="";
  checkIfCarNull=false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private rentService:RentService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if (params['brandId'] && params['colorId']) {
        this.getCarByFilter(params['brandId'], params['colorId']);
      } else if(params["brandId"]){
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

  getCarByFilter(brandId:number, colorId: number) {
    this.carService.getCarsByBrandAndColorId(brandId,colorId).subscribe(response => {
      this.cars = response.data,
      this.carLoaded = true
      if(this.cars.length == 0){
        this.toastrService.info('Bu Özelliklere Sahip Araç Bulunamamıştır', 'Uyarı!');
      }
    })
  }

  rentTheCar(car:Car) {

    this.toastrService.success("Araç Kiralandı", car.carName)
    this.rentService.rentTheCar(car);
  }
}
