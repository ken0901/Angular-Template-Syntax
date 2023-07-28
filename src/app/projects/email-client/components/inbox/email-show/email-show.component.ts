import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../../services/inbox/email.service';
import { switchMap } from 'rxjs/operators';
import { Email } from '../../../models/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: Email
  /**
   *  Information From the Current Route
   *  
   *  Observable -> Emits values whenever some specific part of the URL changes.
   *  Snapshot -> Simple description of what the URL is right now.
   */
  constructor(private route: ActivatedRoute,
              private emailService: EmailService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      })
    ). subscribe((email) => {
      this.email = email;
    });
    
    // not good solution
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email);
    //   });
    // });


    // not good solution
    // this.route.params.subscribe(({ id }) =>{
    //   this.emailService.getEmail(id);
    // });
  }

}
