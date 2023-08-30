import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from './store/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'style-project',
  templateUrl: './style-project.component.html',
  styleUrls: ['./style-project.component.css']
})
export class StyleProjectComponent implements OnInit {
  isAuthorized$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));

    this.store.dispatch(new fromUser.Init);
    this.store.dispatch(new fromDictionaries.Read());
    // this.afs.collection('test').snapshotChanges().subscribe(data => {
    //   console.log(data.map(x => x.payload.doc.data()));
    // });
  }

  onSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }

}
