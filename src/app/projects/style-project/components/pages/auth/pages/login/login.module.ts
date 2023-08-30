import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormFieldModule, InputModule, PasswordModule,SpinnerModule } from '../../../../../shared/controls';
import { ButtonModule } from '../../../../../shared/buttons';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    SpinnerModule,
    ButtonModule
  ]
})
export class LoginModule { }
