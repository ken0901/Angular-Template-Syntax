import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
import * as fromList from './store/list';

import { Job } from './store/list/list.models';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit {
  jobs$: Observable<Job[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.jobs$ = this.store.pipe(select(fromList.selectAll));
    this.store.dispatch(new fromList.Read());
  }

  onEdit(value: Job): void{

  }

  onDelete(id: string): void {

  }

}
