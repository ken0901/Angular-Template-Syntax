import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


/**
 * Reactive Forms vs Template Forms
 * 
 * 
 * # Reactive Forms
 *  Most of the form logic is driven by configuration in a component class file
 *  More appropriate for complex forms 
 *  Exposes some aspects of the form to us as RxJs Observables
 *  We have to wire up the 'ReactiveFormsModule' to our app module to use them!
 * 
 * # Template Forms
 *  Most of the form logic is driven by config in our component template file
 *  More appropriate for simple forms
 *  Harder to deal with dynamic forms (adding/removing form elements)
 *  We have to wire up the 'FormsModule' to our App Module to use them !
 * 
 */
