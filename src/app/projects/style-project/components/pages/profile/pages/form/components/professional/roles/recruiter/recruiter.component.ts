import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionaries } from '../../../../../../../../../store/dictionaries';

export interface RecruiterForm {
  companyName: string;
  employeesCount: number;
}

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit, OnDestroy {
  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() value: RecruiterForm;
  @Input() dictionaries: Dictionaries;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      companyName: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      employeesCount: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }]
    });

    if(this.value){
      this.form.patchValue(this.value);
    }

    this.parent.addControl(this.name, this.form);
  }

  ngOnDestroy(): void {
    this.parent.removeControl(this.name);
  }

}
