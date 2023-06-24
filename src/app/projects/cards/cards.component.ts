import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/pro-cards/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/pro-cards/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/pro-cards/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
