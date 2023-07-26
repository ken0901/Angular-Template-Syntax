import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inbox', loadChildren: () => import('../components/inbox/inbox.module').then(mod => mod.InboxModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailClientRoutingModule { }