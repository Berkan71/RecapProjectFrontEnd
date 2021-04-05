import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  colorLoaded=false;
  currentColor : Color;

  filterColor = "";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors=response.data
      this.colorLoaded=true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item bg-success text-white";
    }else {
      return "list-group-item";
    }
  }
}
