import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { StepperService } from './components/stepper/services';
import { Observable, Subject, zip } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../../store';
import * as fromDictionaries from '../../../../../store/dictionaries';
import * as fromUser from '../../../../../store/user';
import * as fromForm from '../../store/form';

import { PersonalForm } from './components/personal/personal.component';
import { ProfessionalForm } from './components/professional/professional.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MapperService } from './services';

export interface ProfileForm {
  personal: PersonalForm;
  professional: ProfessionalForm;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {

  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  personal$: Observable<PersonalForm>;
  professional$: Observable<ProfessionalForm>;

  private profile$: Observable<ProfileForm>;
  private user: fromUser.User;
  private isEditing: boolean;
  private destory = new Subject<any>();

  constructor(public stepper: StepperService,
              private store: Store<fromRoot.State>,
              private route: ActivatedRoute,
              private router: Router,
              private mapperService: MapperService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user;
    this.isEditing = !!this.user;

    this.profile$ = this.store.pipe(select(fromForm.getFormState));
    this.personal$ = this.store.pipe(select(fromForm.getPersonalForm));
    this.professional$ = this.store.pipe(select(fromForm.getProfessionalForm));

    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));


    if(this.user){
      const form = this.mapperService.userToForm(this.user);
      this.store.dispatch(new fromForm.Set(form));
    }

    this.stepper.init([
      {key: 'personal', label: 'Personal'},
      {key: 'professional', label: 'Professional'},
    ]);

    this.stepper.complete$.pipe(
      switchMap(() => zip(this.profile$,this.dictionaries$)),
      takeUntil(this.destory)).subscribe(([profile, dictionaries]) => {
        this.onComplete(profile, this.user, dictionaries);
      }
    );

    this.stepper.cancel$.pipe(takeUntil(this.destory)).subscribe(() => {
      console.log('cancelled');
    });
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

  onChangedPersonal(data: PersonalForm): void {
    this.store.dispatch(new fromForm.Update({personal: data}));
  }

  onChangedProfessional(data: ProfessionalForm): void {
    this.store.dispatch(new fromForm.Update({professional: data}));
  }

  private onComplete(profile: ProfileForm, user: fromUser.User, dictionaries: fromDictionaries.Dictionaries): void{
    if(this.isEditing){
      const request =this.mapperService.formToUserUpdate(profile, user, dictionaries);
      this.store.dispatch(new fromUser.Update(request));
    }else {
      const request = this.mapperService.formToUserCreate(profile, dictionaries);
      this.store.dispatch(new fromUser.Create(request));
    }
  }
}
