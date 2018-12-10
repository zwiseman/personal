import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Components } from 'components/index';
import { Services } from 'services/index';

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
