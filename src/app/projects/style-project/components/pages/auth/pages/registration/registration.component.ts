import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { regex, regexErrors, markFormGroupTouched } from '../../../../../shared/utils';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../store';
import * as fromUser from '../../../../../store/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(regex.email)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(regex.password)
        ]
      }],
      passwordRepeat: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(regex.password)
        ]
      }],
    }, { validators: this.repeatPasswordValidator});
  }

  private repeatPasswordValidator(group: FormGroup): {[key: string]: boolean} {
    const password = group.get('password');
    const passwordRepeat = group.get('passwordRepeat');

    return passwordRepeat.value && password.value !== passwordRepeat.value ? { repeat: true } : null;
  }

  onSubmit(): void{
    if(this.form.valid){

    }else{
      markFormGroupTouched(this.form);
    }
  }
}