import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'services/index';
import { Subscription } from 'rxjs';
import { City } from 'app/models/city';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {
  weatherInformation: any[];
  location: any[];
  subscription: Subscription;
  cities: City[];
  radar: any = true;
  city: City;
  state: string;
  searching = false;
  image;
  constructor(private _weatherService: WeatherService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getWeather('Asheville', 'NC');
    this.cities = [
      new City('Asheville', 'NC'), new City('Austin', 'TX'), new City('Boston', 'MA'),
      new City('Albany', 'NY'), new City('Dallas', 'TX'), new City('San_Antonio', 'TX'),
      new City('Houston', 'TX'), new City('Johnson_City', 'TN'), new City('Raleigh', 'NC'),
      new City('Seattle', 'WA'), new City('San_Fransisco', 'CA'), new City('Los_Angeles', 'CA'),
      new City('Portland', 'OR'), new City('Denver', 'CO'), new City('Pheonix', 'AZ'),
      new City('Topeka', 'KS'), new City('Jackson', 'WY'), new City('Reno', 'NV'),
      new City('Miami', 'FL'), new City('Green_Bay', 'WI'), new City('New_York', 'NY'),
      new City('Kings_Park', 'NY'), new City('Bakersville', 'NC')
    ];
    this.cities.sort((a: City, b: City) => a.city.localeCompare(b.city));
    console.log(this.cities);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  printCity() {
    console.log(this.city);
  }

  searchWeather() {
    this.getWeather(this.city.city, this.city.state);
  }

  isRadar(): boolean {
    return true;
  }

  isSat(): boolean {
    return false;
  }

  getWeather(city: string, state: string) {
    this.searching = true;
    // this.subscription = this._weatherService.getMapImage(city, state).subscribe(image => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onloadend = () => {
    //     this.image = this.sanitizer.bypassSecurityTrustUrl('data:image/gif;base64,' + reader.result);
    //     this.searching = false;
    //   };
    // });

    this.subscription = this._weatherService.getWeather(city, state).subscribe(data => {
      this.weatherInformation = data['current_observation'];
      this.location = this.weatherInformation['display_location'];
    });
  }
}
