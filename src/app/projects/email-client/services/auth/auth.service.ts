import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

/**
 *  Requirements of the SignedIn Observable
 * 
 *  We must be able to get it to emit a new value 'from the outside'
 *  We must be able to give it a default, or starting, value
 *  New subscribers must be given the value from it immediately after subscribing
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false); // $ dollar sign is an observable.

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<UsernameAvailableResponse>(this.rootUrl + '/auth/username', {
      username: username
    });
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, {
      username: credentials.username,
      password: credentials.password,
      passwordConfirmation: credentials.passwordConfirmation
    }).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
