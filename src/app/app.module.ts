import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './projects/cards/card/card.component';
import { CardsComponent } from './projects/cards/cards.component';
import { CreditCardComponent } from './projects/credit-card/credit-card.component';
import { CreditCardModule } from './projects/credit-card/module/credit-card/credit-card.module';
import { ClassDirective } from './projects/directives/class.directive';
import { DirectivesComponent } from './projects/directives/directives.component';
import { TimesDirective } from './projects/directives/times.directive';
import { EmailFormComponent } from './projects/email-form/email-form.component';
import { EmailFormModule } from './projects/email-form/module/email-form/email-form.module';
import { LandingModule } from './projects/landing/module/landing/landing.module';
import { MathGameComponent } from './projects/math-game/math-game.component';
import { MathModule } from './projects/math-game/math-module/math.module';
import { HomeComponent } from './projects/module-project/components/home/home.component';
import { NotFoundComponent } from './projects/module-project/components/not-found/not-found.component';
import { ModuleProjectComponent } from './projects/module-project/module-project.component';
import { PasswordGeneratorComponent } from './projects/password-generator/password-generator.component';
import { PhotosModule } from './projects/photos/module/photos.module';
import { PhotosComponent } from './projects/photos/photos.component';
import { ConvertPipe } from './projects/pipes/convert.pipe';
import { PipesComponent } from './projects/pipes/pipes.component';
import { TypingChallengeComponent } from './projects/typing-challenge/typing-challenge.component';
import { SearchModule } from './projects/wsearch/module/search/search.module';
import { WsearchComponent } from './projects/wsearch/wsearch.component';


import { StyleProjectModule } from './projects/style-project/module/main/style-project.module';

@NgModule({
    declarations: [
        AppComponent,
        PasswordGeneratorComponent,
        CardsComponent,
        CardComponent,
        TypingChallengeComponent,
        PipesComponent,
        ConvertPipe,
        DirectivesComponent,
        ClassDirective,
        TimesDirective,
        ModuleProjectComponent,
        HomeComponent,
        NotFoundComponent,
        WsearchComponent,
        PhotosComponent,
        CreditCardComponent,
        EmailFormComponent,
        MathGameComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SearchModule,
        PhotosModule,
        CreditCardModule,
        EmailFormModule,
        MathModule,
        // EmailClientModule,
        LandingModule,
        StyleProjectModule,
       
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
