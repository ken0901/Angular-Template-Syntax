import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from '../../components/mods-home/mods-home.component';
import { ModalComponent } from '../../components/mods/modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { AccordionComponent } from '../../components/mods/accordion/accordion.component';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
