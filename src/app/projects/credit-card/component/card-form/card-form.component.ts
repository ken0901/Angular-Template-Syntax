import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(5),Validators.pattern(/\s/)]),
    number: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl('')
  });

  constructor() {
    console.log(this.cardForm.get('name'));
   }

  ngOnInit(): void {
  }

}

/**
 *  Validation - Form
 * 
 *  # Valid - Angular has validated whatever the user entered successfully
 *  # Invalid - The value in the input is invalid
 *  # Pending - Validation is currently running on this field
 *  # Disabled - Ignore user input on this field and don't validate it
 *  # touched - User clicked into then out of  a field
 *  # Untouched - User hasn't clicked into then out of this field
 *  # Pristine - User hasn't clicked on this field at all
 *  # Dirty - User has changed the value of this field
 * 
 */
