import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { LeadersComponent } from './leaders/leaders.component';
import { BaseballComponent } from './baseball/baseball.component';
import { MlbService } from './services/mlb.service';

const routes: Routes = [
  {path: '', redirectTo: '/info', pathMatch: 'full'},
  {path: 'info', component: InfoComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'baseball', component: BaseballComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NavbarComponent,
    WeatherComponent,
    LeadersComponent,
    BaseballComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ WeatherService, MlbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
