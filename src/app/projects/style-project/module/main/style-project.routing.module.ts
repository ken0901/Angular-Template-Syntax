import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children:[
      {
        path:'auth',
        loadChildren: () => import('../../components/pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'demo',
        loadChildren: () => import('../../components/pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path:'static',
        loadChildren: () => import('../../components/pages/static/static.module').then(m => m.StaticModule)
      },
      {
        path:'profile',
        loadChildren: () => import('../../components/pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path:'employees',
        loadChildren: () => import('../../components/pages/employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path:'jobs',
        loadChildren: () => import('../../components/pages/jobs/jobs.module').then(m => m.JobsModule)
      },
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'static/welcome'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/static/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleProjectRoutingModule { }