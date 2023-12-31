import { Component, OnInit } from '@angular/core';
import { Email } from '../../../models/email';
import { AuthService } from '../../../services/auth/auth.service';
import { EmailService } from '../../../services/inbox/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authService: AuthService,
              private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`
    }  
   }

  ngOnInit(): void {
  }

  onSubmit(email: Email){
    // Send the email off via the email service
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
