import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../../validators/math-validators';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl("")
  }, 
    [
      MathValidators.addition('answer', 'a', 'b'),
    ]
  );

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b
  }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100)
    ).subscribe(value => {
      // this.mathForm.controls.a.setValue(this.randomNumber());
      // this.mathForm.controls.b.setValue(this.randomNumber());
      // this.mathForm.controls.answer.setValue('');
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
