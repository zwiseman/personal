import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent, WeatherComponent, AlgorithmsComponent } from 'components/index';

const routes: Routes = [
  {path: '', redirectTo: '/info', pathMatch: 'full'},
  {path: 'info', component: InfoComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'algorithms', component: AlgorithmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
