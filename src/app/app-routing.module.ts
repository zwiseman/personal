import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  InfoComponent,
  WeatherComponent,
  AlgorithmsComponent,
  GenericBinarySearchComponent,
  EnterBstComponent,
  EmployeesComponent } from 'components/index';

const routes: Routes = [
  {path: '', redirectTo: '/info', pathMatch: 'full'},
  {path: 'info', component: InfoComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'algorithms', component: AlgorithmsComponent},
  {path: 'genericbst', component: GenericBinarySearchComponent},
  {path: 'createbst', component: EnterBstComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '**', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
