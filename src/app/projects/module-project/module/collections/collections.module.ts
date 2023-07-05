import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from '../../components/collections-home/collections-home.component';
import { TableComponent } from '../../components/table/table.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionsModule { }
