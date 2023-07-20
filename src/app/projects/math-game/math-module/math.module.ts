import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquationComponent } from '../components/equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHighlightDirective } from '../directives/answer-highlight.directive';



@NgModule({
  declarations: [
    EquationComponent,
    AnswerHighlightDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EquationComponent,
    AnswerHighlightDirective
  ]
})
export class MathModule { }
