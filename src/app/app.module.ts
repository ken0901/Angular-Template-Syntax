import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import { CollectionsModule } from './projects/module-project/module/collections/collections.module';
import { HomeComponent } from './projects/module-project/components/home/home.component';
import { NotFoundComponent } from './projects/module-project/components/not-found/not-found.component';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
