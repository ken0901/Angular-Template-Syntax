import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'project-email-client',
  templateUrl: './email-client.component.html',
  styleUrls: ['./email-client.component.css']
})
export class EmailClientComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;
  //signedIn = false;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
   }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(()=> {});
    // this.authService.signedIn$.subscribe((signedIn) => {
    //   this.signedIn = signedIn;
    // });
  }

}


/**
 * Backend API - Email Client
 * Root URL: https://api.angular-email.com/
 * 
 * 
 * Path                 Method         Body                                   Description
 * /auth/signup         POST           {                                      Signs up for a new account with 
 *                                       username: String,                    the provided username
 *                                       password: String,
 *                                       passwordConfirmation: String
 *                                     }
 * /auth/signin         POST           {                                      Signs in with the provided 
 *                                       username: String,                    username
 *                                       password: String,
 *                                     }
 * 
 * /auth/username       POST           {                                      Checks to see if a username is
 *                                       username: String,                    already in use
 *                                     }
 * /auth/signedin       GET                                                   Checks to see if the user is currently signed in
 * /auth/signout        POST           {}                                     Signs the user out
 * 
 */