import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includedNumber = false;
  includeUseSymbols = false;
  password = '';

  onButtonClick(){
    console.log(this.includeLetters);
    console.log(this.includedNumber);
    console.log(this.includeUseSymbols);
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumber(){
    this.includedNumber = !this.includedNumber;
  }

  onChangeUseSymbols(){
    this.includeUseSymbols = !this.includeUseSymbols;
  }
}
