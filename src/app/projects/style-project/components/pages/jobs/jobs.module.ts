import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';

import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '../../../shared';
import { JobComponent } from './components/job/job.component';

@NgModule({
  declarations: [
    JobsComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('jobs', reducers),
    EffectsModule.forFeature(effects),
    JobsRoutingModule,
    MatDialogModule,
    ButtonModule
  ]
})
export class JobsModule { }
