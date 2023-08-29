import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Firestore } from "@angular/fire/firestore";

import { Observable, from, of } from "rxjs";
import { map, switchMap, catchError, take, tap, withLatestFrom } from 'rxjs/operators';

import { environment } from "src/environments/environment";

import { User } from "./user.models";

import * as fromActions from './user.actions';

import { NotificationService } from "../../services";

type Action = fromActions.All;

@Injectable()
export class UserEffects {
    constructor(private actions: Actions,
                private afAuth: AngularFireAuth,
                private afs: AngularFirestore,
                private router: Router,
                private notification: NotificationService){}
    
    signInEmail: Observable<Action> = createEffect(() => {
        return this.actions.pipe(
            ofType(fromActions.Types.SIGN_IN_EMAIL),
            map((action: fromActions.SignInEmail) => action.credentials),
            switchMap(credentials => 
                from (this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).
                pipe(
                    switchMap(signInState => 
                        this.afs.doc<User>(`users/${signInState.user.uid}`).valueChanges().pipe(
                            take(1),
                            map(user => new fromActions.SignInEmailSuccess(signInState.user.uid, user || null))
                        )
                    ),
                    catchError(err => {
                        this.notification.error(err.message); 
                        return of(new fromActions.SignInEmail(err.message));
                    })    
                )
            )
        );
    });

    signUpEmail: Observable<Action> = createEffect(() => {
        return this.actions.pipe(
            ofType(fromActions.Types.SIGN_UP_EMAIL),
            map((action: fromActions.SignUpEmail) => action.credentials), 
            switchMap(credentials => 
                from (this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)).
                pipe(
                    tap(() => {
                        this.afAuth.currentUser.then(u => u.sendEmailVerification(
                            environment.firebase.actionCodeSettings
                        ));
                        this.router.navigate(['/auth/email-confirm']);
                    }),
                    map((signUpState) => new fromActions.SignUpEmailSuccess(signUpState.user.uid)),
                    catchError(err => {
                        this.notification.error(err.message); 
                        return of(new fromActions.SignUpEmailError(err.message));
                    })    
                )
            )
        );
    });
}