import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from '../../components/collections-home/collections-home.component';
import { TableComponent } from '../../components/table/table.component';
import { SharedModule } from '../../shared/shared.module';
import { BiographyComponent } from '../../components/collections/biography/biography.component';
import { CompaniesComponent } from '../../components/collections/companies/companies.component';
import { PartnersComponent } from '../../components/collections/partners/partners.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionsModule { }
