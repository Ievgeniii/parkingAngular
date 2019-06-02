import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParkingService {

  data: [] = [];
  clickedGarage = new EventEmitter<object>();

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25');
  }
}
