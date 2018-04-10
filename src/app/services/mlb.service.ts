import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class MlbService {
  private url = 'https://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/leaders/statistics.json?api_key=8ntqq4nwycjn4s2ur4rxqbve';

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
