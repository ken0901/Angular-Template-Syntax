import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

import { ControlItem, Value } from '../../../models/frontend';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith, takeUntil } from 'rxjs/operators';
export { ControlItem, Value } from '../../../models/frontend';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() items: ControlItem[];
  @Input() placeholder: string;

  @Output() changed = new EventEmitter<Value>();

  isDisabled: boolean;

  formControl = new FormControl();
  options$: Observable<ControlItem[]>;

  private destory = new Subject<any>();

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter(value => typeof value === 'string' || typeof value === 'object'),
      map(value => typeof value === 'string' ? value:value.lable),
      map(label => label ? this.filter(label) : this.items.slice())
    );

    this.formControl.valueChanges.pipe(
      takeUntil(this.destory),
      distinctUntilChanged()
    ).subscribe(item => {
      const value = typeof item === 'object' ? item.value : null;
      this.propagateChange(value);
      this.changed.emit(value);
    });
  }

  private filter(value: string): ControlItem[] {
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.label.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

  writeValue(value: Value): void {
    const selectedOption = this.items.find(item => item.value === value);
    this.formControl.setValue(selectedOption);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.formControl.disable();
    }else{
      this.formControl.enable();
    }
  }

  displayFn(item?: ControlItem): string | undefined {
    return item ? item.label : undefined;
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
