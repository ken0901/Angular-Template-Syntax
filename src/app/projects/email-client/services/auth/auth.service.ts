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

export interface SigninCredentials{
  username: string;
  password: string;
}

interface SignupResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
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
  signedIn$ = new BehaviorSubject(null); // $ dollar sign is an observable.

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

  checkAuth(){
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`).pipe(
        tap(({ authenticated}) => {
          this.signedIn$.next(authenticated);
      })
    );
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials){
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(()=>{
        this.signedIn$.next(true);
      })
    );
  }
}
