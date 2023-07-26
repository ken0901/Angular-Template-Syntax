import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: '', component: SigninComponent},
  { path: 'signout', component: SignoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
