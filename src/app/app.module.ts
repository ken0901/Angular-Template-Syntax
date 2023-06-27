import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './projects/password-generator/password-generator.component';
import { CardsComponent } from './projects/cards/cards.component';
import { CardComponent } from './projects/cards/card/card.component';
import { TypingChallengeComponent } from './projects/typing-challenge/typing-challenge.component';

@NgModule({
    declarations: [
        AppComponent,
        PasswordGeneratorComponent,
        CardsComponent,
        CardComponent,
        TypingChallengeComponent
        
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
