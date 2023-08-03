import { Injectable } from '@angular/core';

// Javascript way - Get latitude and longitude from console log in website develope mode.

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

// Javascript way

// getCurrentLocation() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       this.position = position;
//       getForecaseData();
//     }
//   );
// }

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }
}
