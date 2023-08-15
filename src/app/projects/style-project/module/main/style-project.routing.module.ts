import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children:[
      {
        path:'demo',
        loadChildren: () => import('../../components/pages/demo/demo.module').then(m => m.DemoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleProjectRoutingModule { }