import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental/rental.service';
import { Rental } from '../../models/rental/rental'

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[] = [];
  rentalLoaded=false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
  }

    getRentals(){
      this.rentalService.getRentals().subscribe(response => {
        this.rentals = response.data
        this.rentalLoaded = true;
      })
    }
}
