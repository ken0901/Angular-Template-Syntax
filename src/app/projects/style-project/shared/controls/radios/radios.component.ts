import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlItem, Value } from '../../../models/frontend';
export { ControlItem, Value } from '../../../models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor{
  @Input() items: ControlItem[];
  @Input() placeholder: string;
  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(value: Value): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value){
    return this.value === value;
  }
}
