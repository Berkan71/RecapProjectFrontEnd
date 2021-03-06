import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  brandLoaded = false;
  currentBrand : Brand;
  filterBrand="";
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();   
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=> {
      this.brands=response.data
      this.brandLoaded=true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item bg-success text-white";
    }else {
      return "list-group-item";
    }
  }

}
