import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

/**
 * canActivate - User can vist this route.
 * canActivateChild - User can visit this child route.
 * canLoad - User can load this lazily-loaded module and access the routes inside of it.
 */

/**
 * ## Auth Guard Issues
 * 
 * # The Signedin$ behavior subject never gets marked as complete
 * -> Use some RxJs trickery to mark the behavior subject as complete
 * 
 * # If the guard runs before our 'checkAuth' function is done, we will provide the default 'false' value, marking the user as not authenticated
 * -> Change the default value of the behavior subject to 'null'
 * 
 * # If we move the 'checkAuth' call to the guard, we risk not running the function at all if a user only loads another route
 * -> Leave the 'checkAuth' call in the Email-client Component
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.signedIn$.pipe(
      skipWhile(value => value === null),
      take(1)
    );
    
    
    // Issue with guard and above is the solution
    // return new Observable((subscriber) => {
    //   subscriber.next(true);
    //   subscriber.complete(); // no longer required to mark.
    // });
  }
}
