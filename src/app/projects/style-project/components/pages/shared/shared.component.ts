import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }]
    })
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'test'});
  }

  onSubmit(): void {
    console.log('Submit !');
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }
}
