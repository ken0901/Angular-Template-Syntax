import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markFormGroupTouched, regex, regexErrors } from '../../../shared';
import { ControlItem } from '../../../models/frontend';
import { NotificationService } from '../../../services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline: boolean;
  regexErrors = regexErrors;
  showSpinner = false;

  items: ControlItem[];

  constructor(private fb: FormBuilder,
              private notificationService: NotificationService) {
    this.isInline = true;

    this.items = [
      { label: 'First', value: 1},
      { label: 'Second', value: 2},
      { label: 'Third', value: 3},
      { label: 'Fourth', value: 4},
      { label: 'fifth', value: 5}
    ];
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({
        input: 'test',
        password: 'password',
        autocomplete: 1,
        select: 2,
        checkboxes: [3],
        radios: 4,
        date: new Date().getTime(),
        dateRange: {
          from: new Date(2023,6,20).getTime(),
          to: new Date(2022, 1, 18).getTime()
        }
    });
  }

  onSubmit(): void {
    console.log('Submit !');

    if(!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }

  onToggleDisable() {
    if(this.form.enabled){
      this.form.disable();
    }else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onError(): void {
    this.notificationService.error('Everything is fine!');
  }

  onSuccess(): void {
    this.notificationService.success('Oops! Something is wrong');
  }

  onFilesChange(urls: string | string[]): void {
    console.log('urls = ', urls);
  }
}
