import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailClientRoutingModule } from './email-client.routing.module';
import { AuthModule } from '../components/auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '../components/auth/auth-http-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmailClientRoutingModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi: true}
  ]
})
export class EmailClientModule { }
