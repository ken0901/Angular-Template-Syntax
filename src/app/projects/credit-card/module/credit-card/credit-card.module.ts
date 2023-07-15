import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from '../../component/card-form/card-form.component';
import { InputComponent } from '../../component/input/input.component';

@NgModule({
  declarations: [
    CardFormComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    CardFormComponent,
    InputComponent,
  ]
})
export class CreditCardModule { }
