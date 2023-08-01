import { Component, OnInit } from '@angular/core';
import { Email } from '../../../models/email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email

  constructor() {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: 'kenlee0901@angular-email.com'
    }  
   }

  ngOnInit(): void {
  }

}
