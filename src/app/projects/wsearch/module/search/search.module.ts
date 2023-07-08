import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from '../../page-list/page-list.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    PageListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  exports: [
    PageListComponent,
    SearchBarComponent
  ]
})
export class SearchModule { }
