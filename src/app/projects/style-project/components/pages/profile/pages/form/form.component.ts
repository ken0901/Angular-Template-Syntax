import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { StepperService } from './components/stepper/services';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../store';
import * as fromDictionaries from '../../../../../store/dictionaries';
import { PersonalForm } from './components/personal/personal.component';
import { ProfessionalForm } from './components/professional/professional.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {

  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  private destory = new Subject<any>();

  constructor(public stepper: StepperService,
              private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));

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

  onChangedPersonal(data: PersonalForm): void {
    console.log('personal changed = ', data);
  }

  onChangedProfessional(data: ProfessionalForm): void {
    console.log('Professional changed = ', data);
  }
}
