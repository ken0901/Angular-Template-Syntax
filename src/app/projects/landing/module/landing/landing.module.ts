import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from '../../weather/weather.module';
import { LandingComponent } from '../../landing.component';
import { NotificationsModule } from '../../notifications/notifications.module';
import { NewsApiModule } from '../../news-api/news-api.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    WeatherModule,
    NotificationsModule,
    NewsApiModule
  ],
  exports:[
    LandingComponent
  ]
})
export class LandingModule { }
