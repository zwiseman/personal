import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule} from '@angular/material';
import { Components,
  EditEmployeeComponent,
  CreateEmployeeComponent } from 'components/index';
import { Services } from 'services/index';
import { Pipes } from 'pipes/index';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [ Services,
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}],
  bootstrap: [AppComponent],
  entryComponents: [ EditEmployeeComponent, CreateEmployeeComponent ]
})
export class AppModule { }
