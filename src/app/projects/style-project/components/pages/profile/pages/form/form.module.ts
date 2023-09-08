import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormFieldModule, InputModule, AutocompleteModule } from '../../../../../shared/controls';
import { FilesUploadModule } from '../../../../../shared/popups';
import { SpinnerModule } from '../../../../../shared/controls';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { StepperModule } from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { UserPhotoModule } from 'src/app/projects/style-project/shared';


@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    StepperModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    AutocompleteModule,
    FilesUploadModule,
    SpinnerModule,
    UserPhotoModule
  ]
})
export class FormModule { }
