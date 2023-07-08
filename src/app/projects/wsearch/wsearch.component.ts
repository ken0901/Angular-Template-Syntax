import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-wsearch',
  templateUrl: './wsearch.component.html',
  styleUrls: ['./wsearch.component.css']
})
export class WsearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTerm(term: string){
    console.log('I am the app', term);
  }
}
