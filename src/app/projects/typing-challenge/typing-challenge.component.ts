import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'project-typing-challenge',
  templateUrl: './typing-challenge.component.html',
  styleUrls: ['./typing-challenge.component.css']
})
export class TypingChallengeComponent implements OnInit {
  randomText = faker.lorem.sentence();
  enteredText = '';
  
  // other way
  // solved = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event){
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;

    /*
    * other way
    * It can't be compared each character that is wrong.
    * 
    if(target.value === this.randomText){
      this.solved = true;
    }
    */
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct': 'incorrect';
    // if(enteredLetter === randomLetter){
    //   return 'correct';
    // }else {
    // return 'incorrect';
    //}
  }
}
