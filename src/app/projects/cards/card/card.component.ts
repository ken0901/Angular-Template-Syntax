import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() imageUrl;
  @Input() username;
  @Input() content;

  constructor() { }

  ngOnInit(): void {
  }

}
