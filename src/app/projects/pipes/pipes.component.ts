import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

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

  onAmountchange(event: Event){
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }

  onHeightChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onMilesChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
