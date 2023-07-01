import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './projects/module-project/components/home/home.component';
import { NotFoundComponent } from './projects/module-project/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
