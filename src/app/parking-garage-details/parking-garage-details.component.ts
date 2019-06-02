import { Component } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parking-garage-details',
  templateUrl: './parking-garage-details.component.html',
  styleUrls: ['./parking-garage-details.component.css']
})
export class ParkingGarageDetailsComponent {
  url = null;
  show = false;
  availableSpaces = '';

  constructor(private parkingService: ParkingService) {
    this.parkingService.clickedGarage.subscribe(
      (garage: object) => this.showData(garage)
    );
  }

  showData(garage) {
    const availableSpaces = garage.properties.layers['parking.garage'].data.FreeSpaceShort;
    const spacesOverall = garage.properties.layers['parking.garage'].data.ShortCapacity;

    if (availableSpaces >= 0) {
      this.availableSpaces = availableSpaces + ' / ' + spacesOverall;
    } else {
      this.availableSpaces = 'NO DATA';
    }

    this.url = 'http://citysdk.waag.org/map/#layers/parking.garage/objects?in=' + garage.properties.cdk_id;
    this.show = true;
  }

}
