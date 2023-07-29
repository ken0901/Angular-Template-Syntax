import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Email } from '../../models/email';
import { EmailService } from '../../services/inbox/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService  implements Resolve<Email>{

  constructor(private emailService: EmailService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    
    return this.emailService.getEmail(id);
  }
}
