import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../components/auth/auth.guard';

const routes: Routes = [
  { path: 'inbox', canLoad: [AuthGuard], loadChildren: () => import('../components/inbox/inbox.module').then(mod => mod.InboxModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailClientRoutingModule { }