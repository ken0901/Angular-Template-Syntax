import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
  constructor() { }

  public search(term: string){
    return 'I am wikipedia search results';
  }
}
