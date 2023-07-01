import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from '../../components/elements-home/elements-home.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { ElementTimesDirective } from './directives/times.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    ElementTimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: []
})
export class ElementsModule { }
