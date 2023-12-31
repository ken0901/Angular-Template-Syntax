import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormFieldModule, InputModule, AutocompleteModule, SelectModule, CheckboxesModule, RadiosModule, DateRangeModule } from '../../../../../shared/controls';
import { FilesUploadModule } from '../../../../../shared/popups';
import { SpinnerModule } from '../../../../../shared/controls';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { StepperModule } from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { ButtonModule, UserPhotoModule } from 'src/app/projects/style-project/shared';
import { EmployeeComponent } from './components/professional/roles/employee/employee.component';
import { RecruiterComponent } from './components/professional/roles/recruiter/recruiter.component';
import { ExperiencesComponent } from './components/professional/roles/employee/experiences/experiences.component';
import { MapperService } from './services';


@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    ProfessionalComponent,
    EmployeeComponent,
    RecruiterComponent,
    ExperiencesComponent
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
    UserPhotoModule,
    SelectModule,
    RadiosModule,
    CheckboxesModule,
    DateRangeModule,
    ButtonModule
  ],
  providers: [
    MapperService
  ]
})
export class FormModule { }
