import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Email } from '../../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService  implements Resolve<Email>{

  constructor() { }

  resolve() {
    return {
      id: "sadsad",
      subject: "asdasd",
      text: "dsds",
      from: "sdfds",
      html: "sdfsdf",
      to: "sdfsdf"
    } 
  }
}
