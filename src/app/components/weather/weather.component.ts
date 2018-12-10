import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {
  weatherInformation: any[];
  location: any[];
  subscription: Subscription;
  radar: any = true;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this._weatherService.getWeather().subscribe(data => {
      this.weatherInformation = data['current_observation'];
      this.location = this.weatherInformation['display_location'];
      console.log(this.weatherInformation);
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
