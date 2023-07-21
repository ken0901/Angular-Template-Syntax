import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailClientRoutingModule } from './email-client.routing.module';
import { AuthModule } from '../components/auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmailClientRoutingModule,
    AuthModule
  ]
})
export class EmailClientModule { }
