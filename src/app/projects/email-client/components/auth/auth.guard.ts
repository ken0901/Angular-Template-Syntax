import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * canActivate - User can vist this route.
 * canActivateChild - User can visit this child route.
 * canLoad - User can load this lazily-loaded module and access the routes inside of it.
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
}
