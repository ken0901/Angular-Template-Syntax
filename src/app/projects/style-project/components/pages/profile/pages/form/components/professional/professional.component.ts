import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { StepperService } from '../stepper/services';
import { takeUntil } from 'rxjs/operators';

import {
  regex,
  regexErrors,
} from '../../../../../shared/../../../shared/utils';
import {
  ControlItem,
  Dictionaries,
} from '../../../../../../../store/dictionaries';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markFormGroupTouched } from '../../../../../shared/../../../shared/utils';
import { RecruiterForm } from './roles/recruiter/recruiter.component';
import { EmployeeForm } from './roles/employee/employee.component';

export interface ProfessionalForm {
  about: string;
  roleId: string;
  roleRecruiter: RecruiterForm;
  roleEmployee: EmployeeForm; 
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit, OnDestroy {
  @Input() value: ProfessionalForm;
  @Input() dictionaries: Dictionaries;

  @Output() changed = new EventEmitter<ProfessionalForm>();
  
  private destory = new Subject<any>();
  form: FormGroup;
  regexErrors = regexErrors;

  constructor(private stepper: StepperService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef,) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      roleId: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      about: [null]
    });

    if(this.value){
      this.form.patchValue(this.value);
    }

    this.stepper.check$.pipe(takeUntil(this.destory)).subscribe((type) => {
      if(!this.form.valid){
        markFormGroupTouched(this.form);
        this.form.updateValueAndValidity();
        this.cdr.detectChanges();
      }else{
        this.changed.emit(this.form.value);
      }
      this.stepper[type].next(true);
    });
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }
}
