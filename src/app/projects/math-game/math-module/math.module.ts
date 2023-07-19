import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquationComponent } from '../components/equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EquationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EquationComponent
  ]
})
export class MathModule { }
