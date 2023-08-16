import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonModule
  ]
})
export class ButtonsModule { }
