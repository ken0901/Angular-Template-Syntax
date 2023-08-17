import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule
  ],
  exports: [
    InputModule,
    FormFieldModule
  ]
})
export class ControlsModule { }
