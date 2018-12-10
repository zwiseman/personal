import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherComponent]
})
export class MyModule {

}
