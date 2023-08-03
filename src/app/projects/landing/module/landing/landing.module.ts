import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from '../../weather/weather.module';
import { LandingComponent } from '../../landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    WeatherModule
  ],
  exports:[
    LandingComponent
  ]
})
export class LandingModule { }
