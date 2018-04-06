import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {
  data: any[];
  location: any[];
  subscription: Subscription;
  radar: any = true;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this._weatherService.getWeather().subscribe(data => {
      this.data = data['current_observation'];
      this.location = this.data['display_location'];
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isRadar(): boolean {
    return true;
  }

  isSat(): boolean {
    return false;
  }
}