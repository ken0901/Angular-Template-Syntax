import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  //TODO: make sure we receive this value from the parent component
  @Input() numberOfPages: number;
  pageOptions: number[];
  
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages);
  }

  updatePageNumber(index: number) {
    this.currentPage = index;
  }
}
