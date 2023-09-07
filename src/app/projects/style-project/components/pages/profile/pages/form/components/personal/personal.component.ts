import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { StepperService } from '../stepper/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit, OnDestroy {
  private destory = new Subject<any>();

  constructor(private stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.check$.pipe(takeUntil(this.destory)).subscribe((type) => {
      // type === 'next'
      this.stepper[type].next(true);
    });
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

}
