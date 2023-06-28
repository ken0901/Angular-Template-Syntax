import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name: string;
  date: string;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

}
