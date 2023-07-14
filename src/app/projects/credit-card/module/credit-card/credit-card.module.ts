import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from '../../component/card-form/card-form.component';

@NgModule({
  declarations: [
    CardFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    CardFormComponent
  ]
})
export class CreditCardModule { }
