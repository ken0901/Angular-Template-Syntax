import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { StepperService } from '../stepper/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  private destory = new Subject<any>();
  
  constructor(private stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.check$.pipe(takeUntil(this.destory)).subscribe((type) => {
      // type === 'complete'
      this.stepper[type].next(true);
    });
  }
  
  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

}
