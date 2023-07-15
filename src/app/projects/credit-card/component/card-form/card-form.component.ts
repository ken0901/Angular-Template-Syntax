import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../../class/date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(5)]),
    number: new FormControl('', [Validators.required, Validators.minLength(16),Validators.maxLength(16)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]), // mm/dd
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  constructor() {}

  ngOnInit(): void {
  }


  onSubmit() {
    console.log('Form was submitted');
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
