import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './projects/module-project/components/home/home.component';
import { NotFoundComponent } from './projects/module-project/components/not-found/not-found.component';

const routes: Routes = [
  // module-project routing
  // { 
  //   path: 'elements', 
  //   loadChildren: () => 
  //     import('./projects/module-project/module/elements/elements.module').then((m) => m.ElementsModule)
  // },
  // {
  //   path: 'collections',
  //   loadChildren: () =>
  //     import('./projects/module-project/module/collections/collections.module').then((m) => m.CollectionsModule)
  // },
  // {
  //   path: 'views',
  //   loadChildren: () =>
  //     import('./projects/module-project/module/views/views.module').then((m) => m.ViewsModule)
  // },
  // {
  //   path: 'mods',
  //   loadChildren: () =>
  //     import('./projects/module-project/module/mods/mods.module').then((m) => m.ModsModule)
  // },
  // { path: '', component:HomeComponent},
  // { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
