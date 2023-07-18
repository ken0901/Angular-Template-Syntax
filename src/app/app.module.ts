import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './projects/password-generator/password-generator.component';
import { CardsComponent } from './projects/cards/cards.component';
import { CardComponent } from './projects/cards/card/card.component';
import { TypingChallengeComponent } from './projects/typing-challenge/typing-challenge.component';
import { PipesComponent } from './projects/pipes/pipes.component';
import { ConvertPipe } from './projects/pipes/convert.pipe';
import { DirectivesComponent } from './projects/directives/directives.component';
import { ClassDirective } from './projects/directives/class.directive';
import { TimesDirective } from './projects/directives/times.directive';
import { ModuleProjectComponent } from './projects/module-project/module-project.component';
import { HomeComponent } from './projects/module-project/components/home/home.component';
import { NotFoundComponent } from './projects/module-project/components/not-found/not-found.component';
import { WsearchComponent } from './projects/wsearch/wsearch.component';
import { SearchModule } from './projects/wsearch/module/search/search.module';
import { PhotosComponent } from './projects/photos/photos.component';
import { PhotosModule } from './projects/photos/module/photos.module';
import { CreditCardComponent } from './projects/credit-card/credit-card.component';
import { CreditCardModule } from './projects/credit-card/module/credit-card/credit-card.module';
import { EmailFormComponent } from './projects/email-form/email-form.component';
import { EmailFormModule } from './projects/email-form/module/email-form/email-form.module';

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
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SearchModule,
        PhotosModule,
        CreditCardModule,
        EmailFormModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
