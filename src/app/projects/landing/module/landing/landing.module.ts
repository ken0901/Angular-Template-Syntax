import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from '../../weather/weather.module';
import { LandingComponent } from '../../landing.component';
import { NotificationsModule } from '../../notifications/notifications.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    WeatherModule,
    NotificationsModule
  ],
  exports:[
    LandingComponent
  ]
})
export class LandingModule { }
