import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './dom-sanitizer';

import { AppComponent } from './app.component';
import { ParkingGaragesComponent } from './parking-garages/parking-garages.component';
import { ParkingGarageDetailsComponent } from './parking-garage-details/parking-garage-details.component';
import { ParkingService } from './services/parking.service';

@NgModule({
  declarations: [
    AppComponent,
    ParkingGaragesComponent,
    ParkingGarageDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
