import { Injectable } from "@angular/core";
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { AngularFirestore, DocumentChangeAction } from "@angular/fire/compat/firestore";

import { Observable, of, zip } from "rxjs";
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { Dictionaries, Dictionary, Item, ControlItem } from "./dictionaries.models";

import * as fromActions from './dictionaries.actions';

type Action = fromActions.All;

const documentToItem = (x: DocumentChangeAction<any>): Item => {
    const data = x.payload.doc.data();
    return {
        id: x.payload.doc.id,
        ...data
    };
}

const itemToControlItem = (x: Item): ControlItem => ({
    value: x.id,
    label: x.name,
    icon: x.icon
});

const addDictionary = (items: Item[]): Dictionary => ({
    items,
    controlItems: [...items].map(x => itemToControlItem(x))
})

@Injectable()
export class DictionariesEffects {
    constructor(private actions: Actions,
                private afs: AngularFirestore){}

    read: Observable<Action> = createEffect(() => {
        return this.actions.pipe(
            ofType(fromActions.Types.READ),
            switchMap(() => {
                return zip(
                    this.afs.collection('roles').snapshotChanges().pipe(
                        take(1),
                        map(items => items.map(x => documentToItem(x)))
                    ),
                    this.afs.collection('specializations').snapshotChanges().pipe(
                        take(1),
                        map(items => items.map(x => documentToItem(x)))
                    ),
                    this.afs.collection('qualifications').snapshotChanges().pipe(
                        take(1),
                        map(items => items.map(x => documentToItem(x)))
                    ),
                    this.afs.collection('skills').snapshotChanges().pipe(
                        take(1),
                        map(items => items.map(x => documentToItem(x)))
                    )
                ).pipe(
                    map(([roles, specializations, qualifications, skills]) => {
                        const dictionaries: Dictionaries = {
                            roles: addDictionary(roles),
                            specializations: addDictionary(specializations),
                            qualifications: addDictionary(qualifications),
                            skills: addDictionary(skills)
                        };
                        return new fromActions.ReadSuccess(dictionaries);
                    }),
                    catchError(err => of(new fromActions.ReadError(err.message)))
                );
            })
        ); 
    });
}