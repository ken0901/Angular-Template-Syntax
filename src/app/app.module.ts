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

@NgModule({
    declarations: [
        AppComponent,
        PasswordGeneratorComponent,
        CardsComponent,
        CardComponent,
        TypingChallengeComponent,
        PipesComponent,
        ConvertPipe,
        DirectivesComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
       
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
