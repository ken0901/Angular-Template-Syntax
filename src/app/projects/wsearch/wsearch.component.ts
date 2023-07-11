import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'project-wsearch',
  templateUrl: './wsearch.component.html',
  styleUrls: ['./wsearch.component.css']
})
export class WsearchComponent implements OnInit {

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
  }

  onTerm(term: string){
    this.wikipediaService.search(term).subscribe((response) => {
      console.log(response);
    });
  }
}
