import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-garages',
  templateUrl: './parking-garages.component.html',
  styleUrls: ['./parking-garages.component.css']
})
export class ParkingGaragesComponent {
  @Input() element;

  getAvailableSpaces() {
    const availableSpaces = this.element.properties.layers['parking.garage'].data.FreeSpaceShort;
    let message = '';

    if (availableSpaces === 0) {
      message = 'NO FREE SPACES';
    } else if (!availableSpaces) {
      message = 'NO DATA';
    } else {
      message = availableSpaces;
    }
    return message;
  }

}
