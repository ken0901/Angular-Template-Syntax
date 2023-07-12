import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'project-wsearch',
  templateUrl: './wsearch.component.html',
  styleUrls: ['./wsearch.component.css']
})
export class WsearchComponent implements OnInit {
  pages = [];

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
  }

  onTerm(term: string){
    this.wikipediaService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}


/**
 *  Notes on Rxjs
 * 
 *  Separate library from Angular
 *  Used extensively by Angular for managing data
 *  We use this instead of promises or async/await for handling async stuff
 *  Not strictly required! We can use promises and async/await!
 *  Rxjs makes building some kinds of features really really easy compared to writing normal code
 *  Hard. Probably the hardest thing in hte world of JS, period.
 *  If you can get a good grasp of Rxjs, all of Angular is at your fingertips!
 * 
 *  Play around this website - https://out.stegrider.vercel.app/
 *  const  { fromEvent } = Rx;
 *  const { map } = RxOperators;
 *  const input = document.createElement('input');
 *  const container = document.querySelector('.container');
 *  container.appendChild(input);
 *  const observable = fromEvent(input, 'input');
 *    .pipe(
 *      map(event => event.target.value),
 *      map(value => parseInt(value)),
 *      map(value => {
 *        if (isNaN(value)) {
 *          throw new Error('Enter a number!');   
 *        }
 *        return value;
 *      })
 *  )
 *  // This is specific to this tool, we don't need to write this in the real world
 *  observable;
 * 
 */