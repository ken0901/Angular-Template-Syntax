import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionaries } from '../../../../../../../../../store/dictionaries';

export interface EmployeeForm {
  specialization: string;
  skills: string[];
  qualification: string;
  expectedSalary: number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() value: EmployeeForm;
  @Input() dictionaries: Dictionaries;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      expectedSalary: [null,{
        updateOn: 'blur', validations: [
          Validators.required
        ]
      }],
      specialization: [null,{
        updateOn: 'change', validations: [
          Validators.required
        ]
      }],
      qualification: [null,{
        updateOn: 'change', validations: [
          Validators.required
        ]
      }],
      skills: [null,{
        updateOn: 'change', validations: [
          Validators.required
        ]
      }],
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
