/**
 *  Firebase Modules
 */
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
/**
 *  ----------------------------END---------------
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { StyleProjectRoutingModule } from './style-project.routing.module';
import { StyleProjectComponent } from '../../style-project.component';
import { environment } from 'src/environments/environment';
import { DemoModule } from '../../components/pages/demo/demo.module';
import { SharedModule } from '../../components/pages/shared/shared.module';
import { StylesModule } from '../../components/pages/styles/styles.module';

// Date
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NotificationModule } from '../../services';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric'},
  },
  display: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

// Services


@NgModule({
  declarations: [
    StyleProjectComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    StyleProjectRoutingModule,
    DemoModule,
    SharedModule,
    StylesModule,
    MatNativeDateModule,
    NotificationModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
  exports:[
    StyleProjectComponent,
    HeaderComponent,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase.config}
  ]
})
export class StyleProjectModule { }
