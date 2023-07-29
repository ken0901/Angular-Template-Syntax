import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Email } from '../../models/email';
import { EmailService } from '../../services/inbox/email.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService  implements Resolve<Email>{

  constructor(private emailService: EmailService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        
        return EMPTY;
      })
    );
  }
}
