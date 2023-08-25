import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';

@Component({
  selector: 'style-project',
  templateUrl: './style-project.component.html',
  styleUrls: ['./style-project.component.css']
})
export class StyleProjectComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromDictionaries.Read());
    // this.afs.collection('test').snapshotChanges().subscribe(data => {
    //   console.log(data.map(x => x.payload.doc.data()));
    // });
  }

}
