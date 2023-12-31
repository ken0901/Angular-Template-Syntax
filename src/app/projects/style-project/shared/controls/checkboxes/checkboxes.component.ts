import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlItem, Value } from '../../../models/frontend';
export { ControlItem, Value } from '../../../models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    },
  ],
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  @Input() items: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>();

  value: Value[];
  isDisabled: boolean;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: Value[]): void {
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

  onChange(value: Value, checked: boolean): void {
    const selected = this.getSelected(value, checked);

    this.value = selected;
    this.propagateChange(selected);
    this.changed.emit(selected);
  }

  private getSelected(value: Value, checked: boolean): Value[] {
    const selected: Value[] = this.value ? [...this.value] : [];

    if(checked){
      if(!selected.includes(value)){
        selected.push(value);
      }
    }else {
      const index = selected.indexOf(value);
      selected.splice(index, 1);
    }

    return selected.length ? selected:null;
  }

  isChecked(value: Value): boolean {
    return this.value && this.value.includes(value);
  }
}
