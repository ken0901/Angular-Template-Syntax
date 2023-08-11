import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  //TODO: make sure we receive this value from the parent component
  numberOfPages = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
