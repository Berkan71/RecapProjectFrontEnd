import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  colors:Color[]
  brands:Brand[]
  brandFilter:number;
  colorFilter:number;

  constructor(private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }
  getSelectedBrand(brandId: Number) {
    if (this.brandFilter == brandId)
      return true;
    else
      return false;
  }
  getSelectedColor(colorId: Number) {
    if (this.colorFilter == colorId)
      return true;
    else
      return false;
  }

}
