import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includedNumber = false;
  includeUseSymbols = false;
  password = '';

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includedNumber){
      validChars += numbers;
    }
    if(this.includeUseSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includedNumber = !this.includedNumber;
  }

  onChangeUseSymbols(){
    this.includeUseSymbols = !this.includeUseSymbols;
  }
}
