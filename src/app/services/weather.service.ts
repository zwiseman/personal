import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class WeatherService {
  private url = 'http://api.wunderground.com/api/83e8c2eba2c4b5d3/conditions/q/CA/Asheville.json';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
