import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string, state: string): Observable <any> {
    const url = 'http://api.wunderground.com/api/83e8c2eba2c4b5d3/conditions/q/' + state + '/' + city + '.json';
    return this.http.get<any>(url);
  }

  getMapImage(city: string, state: String): Observable<Blob> {
    const url = 'http://api.wunderground.com/api/83e8c2eba2c4b5d3/animatedradar/animatedsatellite/q/' + state + '/'
    + city + '.gif?num=10&delay=50&interval=50&rad.rainsnow=1&rad.height=700&rad'
    + '.width=700&sat.height=700&sat.width=700&sat.smooth=1&sat.basemap=1&rad.smooth=1&rad.radius=500&sat.radius=500';
    return this.http.get(url, {responseType: 'blob'});
  }
}
