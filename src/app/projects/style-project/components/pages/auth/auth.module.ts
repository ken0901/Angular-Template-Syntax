import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';


@NgModule({
  declarations: [
    EmailConfirmComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
