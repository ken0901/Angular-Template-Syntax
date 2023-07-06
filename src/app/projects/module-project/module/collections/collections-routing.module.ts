import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from '../../components/collections-home/collections-home.component';
import { BiographyComponent } from '../../components/collections/biography/biography.component';
import { CompaniesComponent } from '../../components/collections/companies/companies.component';
import { PartnersComponent } from '../../components/collections/partners/partners.component';

const routes: Routes = [
  { 
    path: '', 
    component:CollectionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
