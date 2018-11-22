import { RouterModule } from '@angular/router';
import { InfoComponent, WeatherComponent } from 'components/index';

export const Routes = RouterModule.forRoot([
    {path: '', redirectTo: '/info', pathMatch: 'full'},
    {path: 'info', component: InfoComponent},
    {path: 'weather', component: WeatherComponent},
]);
