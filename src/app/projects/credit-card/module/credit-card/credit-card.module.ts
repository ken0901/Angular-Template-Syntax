import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from '../../component/card-form/card-form.component';
import { InputComponent } from '../../component/input/input.component';
import { CardComponent } from '../../component/card/card.component';

@NgModule({
  declarations: [
    CardFormComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    CardFormComponent,
    InputComponent,
    CardComponent
  ]
})
export class CreditCardModule { }
