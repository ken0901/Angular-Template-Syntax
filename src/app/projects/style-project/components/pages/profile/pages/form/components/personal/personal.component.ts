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
import { ControlItem, Dictionaries } from '../../../../../../../store/dictionaries';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markFormGroupTouched } from '../../../../../shared/../../../shared/utils';
import * as jsonCountries from '../../../../../../../../../../assets/countries.json';

export interface PersonalForm {
  name: string;
  photoURL: string;
  country: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent implements OnInit, OnDestroy {
  @Input() value: PersonalForm;
  @Input() dictionaries: Dictionaries;

  @Output() changed = new EventEmitter<PersonalForm>();

  form: FormGroup;
  regexErrors = regexErrors;
  item: ControlItem[];
  
  private destroy = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private stepper: StepperService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      photoURL: [null],
      name: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(regex.latinAndSpaces),
          ],
        },
      ],
      country: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });

    if (this.value) {
      this.form.patchValue(this.value);
    }

    this.stepper.check$.pipe(takeUntil(this.destroy)).subscribe((type) => {
      if (!this.form.valid) {
        markFormGroupTouched(this.form);
        this.form.updateValueAndValidity();
        this.cdr.detectChanges();
      } else {
        this.changed.emit(this.form.value);
      }

      this.stepper[type].next(this.form.valid);
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  onPhotoChanged(url: string | string[]): void {
    console.log(url);
    if (url) {
      this.form.controls.photoURL.setValue(url);
    }
  }
}
