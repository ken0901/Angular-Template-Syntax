import { Component, OnInit, OnDestroy } from '@angular/core';
import { StepperService } from './components/stepper/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  private destory = new Subject<any>();

  constructor(public stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.init([
      {key: 'personal', label: 'Personal'},
      {key: 'professional', label: 'Professional'},
    ]);

    this.stepper.complete$.pipe(takeUntil(this.destory)).subscribe(() => {
      console.log('completed');
    });

    this.stepper.cancel$.pipe(takeUntil(this.destory)).subscribe(() => {
      console.log('cancelled');
    });
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

}
