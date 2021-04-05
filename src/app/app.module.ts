import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { MainComponent } from './components/main/main.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import {FormsModule} from '@angular/forms';
import { FilterCarPipe } from './pipes/filter-car.pipe'
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RentTheCarComponent } from './components/rent-the-car/rent-the-car.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { PaymentComponent } from './components/payment/payment.component'

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    MainComponent,
    CarDetailComponent,
    FilterCarPipe,
    RentTheCarComponent,
    FilterBrandPipe,
    FilterColorPipe,
    FilterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
