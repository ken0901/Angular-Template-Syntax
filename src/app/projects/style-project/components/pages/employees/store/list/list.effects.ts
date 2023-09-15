import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Observable, of } from "rxjs";
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { User } from "./list.models";
import * as fromActions from './list.actions';
import { extractDocumentChangeActionData } from "src/app/projects/style-project/shared";

type Action = fromActions.All;

@Injectable()
export class ListEffects {
    constructor(private actions: Actions,
                private afs: AngularFirestore){}

    read: Observable<Action> = createEffect(() => {
        return this.actions.pipe(
            ofType(fromActions.Types.READ),
            switchMap(() => 
                this.afs.collection<User>('users', ref => ref.where('roleId', '==', 'employee')).snapshotChanges().pipe(
                    take(1),
                    map(changes => changes.map(x => extractDocumentChangeActionData(x, false))),
                    map((items: User[]) => new fromActions.ReadSuccess(items)),
                    catchError(err => of(new fromActions.ReadError(err.message)))
                )
            )
        );
    });

    
}