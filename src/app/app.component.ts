import { Component, ViewEncapsulation } from '@angular/core';

import { ParkingService } from './services/parking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  parkingGarages: [] = [];
  selected;

  constructor(private parkingService: ParkingService) {
    this.parkingService.getData()
      .subscribe(
        (res: object) => this.storeData(res)
      );
  }

  storeData(res) {
    this.parkingService.data = res.features;
    this.parkingGarages = this.parkingService.data;
  }

  loadDetails(garage) {
    this.parkingService.clickedGarage.emit(garage);
  }

  makeActive(garage) {
    this.selected = garage;
  }

}
