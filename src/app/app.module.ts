import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { Components } from 'components/index';
import { Services } from 'services/index';
import { Routes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    Routes,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ Services ],
  bootstrap: [AppComponent]
})
export class AppModule { }
