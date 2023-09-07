import { Component, OnInit, OnDestroy } from '@angular/core';
import { StepperService } from './services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit, OnDestroy {
  
  private destory = new Subject<any>();

  constructor(private stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.next$.pipe(takeUntil(this.destory)).subscribe(() => {
      this.stepper.onNext();
    });
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

  get steps() {
    return this.stepper.steps;
  }

  get activeStep() {
    return this.stepper.activeStep;
  }

  isActive(index: number): boolean {
    return index === this.activeStep.index;
  }

  isCompleted(index: number): boolean {
    return index < this.activeStep.index;
  }

  isFirst(): boolean {
    return this.activeStep.index === 0;
  }

  isLast(): boolean {
    return this.activeStep.index === this.steps.length - 1;
  }

  onNext() {
    this.stepper.check.next('next');
  }
  onComplete() {
    this.stepper.check.next('complete');
  }
  onPrev() {
    this.stepper.onPrev();
  }
  onCancel() {
    this.stepper.cancel.next();
  }

}
