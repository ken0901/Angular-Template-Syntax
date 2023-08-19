import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';

export interface Value {
  from: string;
  to: string;
}

export interface Placeholder {
  from: string;
  to: string;
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true,
    },
  ],
})
export class DateRangeComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: Placeholder;
  
  @Output() changed = new EventEmitter<Value>();
  @Output() closed = new EventEmitter<void>();
  
  
  value: Value;
  isDisabled: boolean;
  
  form: FormGroup;
  
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      from: [null],
      to: [null],
    });
  }

  get min(): Date{
    const from = this.form.controls.from.value;
    return from ? new Date(from): null;
  }
  get max(): Date{
    const to = this.form.controls.to.value;
    return to ? new Date(to): null;
  }
  
  writeValue(value: Value): void {
    this.form.patchValue(value || {});
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.form.disable();
    }else {
      this.form.enable();
    }
  }

  onChange(): void {
    const value = {...this.form.value};

    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed(): void {
    this.propagateTouched();
    this.closed.emit();
  }
}
