import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getForecast() {
    return this.getCurrentlocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid',''); // api key from openwethermap.org
      }),
      switchMap(params => this.http.get(this.url, { params }))
    );
  }

  getCurrentlocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      )
    });
  }
}
