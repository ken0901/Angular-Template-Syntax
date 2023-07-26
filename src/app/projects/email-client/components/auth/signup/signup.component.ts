import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService, SignupCredentials } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /**
   *  username - required - letter and numbers, min length 3, max length 20
   *  password - required, min length 4, max length 20
   *  passwordConfirmation - required, min length 4, max length 20
   */
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(20), 
      Validators.pattern(/^[a-z0-9]+$/) // letter and number
    ], [this.uniqueUsername.validate]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(20),
    ])
  }, { validators: [this.matchPassword.validate]});

  constructor(private matchPassword: MatchPassword,
              private uniqueUsername: UniqueUsername,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    this.authService.signup(this.authForm.value as SignupCredentials).subscribe({
      next: response => {
        //Navigate to some other route
        this.router.navigateByUrl('/inbox');
      },
      error: err => {
        if(!err.status){
          this.authForm.setErrors({ noConnection: true });
        }else{
          this.authForm.setErrors({ unknownError: true });
        }
      }
    });
  }
}
