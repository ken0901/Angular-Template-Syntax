import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { StyleProjectRoutingModule } from './style-project.routing.module';
import { StyleProjectComponent } from '../../style-project.component';

/**
 *  Firebase Modules
 */
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    StyleProjectComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StyleProjectRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
  exports:[
    StyleProjectComponent,
    HeaderComponent
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase.config}
  ]
})
export class StyleProjectModule { }
