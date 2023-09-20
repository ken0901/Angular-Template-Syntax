import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as fromUser from '../../store/user';

import { Roles } from '../../store/user';
export { Roles } from '../../store/user';

type Role = Roles.Employee | Roles.Recruiter;

export interface GuardData {
  roles: Role[];
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private store: Store<fromRoot.State>){}

  private check(allowedRoles: string[]): Observable<boolean>{
    return this.store.pipe(select(fromUser.getUser)).pipe(
      take(1),
      map(user => {
        return allowedRoles.includes(user.roleId);
      }),
      tap(isAllowed => {
        if(!isAllowed){
          this.router.navigate(['/']);
        }
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(route.data.roles);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(childRoute.data.roles);;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(route.data.roles);;
  }
}
