import { Injectable } from '@angular/core';

/**
 *  # Subject - Hot by default - it will emit values even if nobody is listening!
 *            - The Subject is Multicast by default - multiple subscribers always get the same value
 *            - Calling 'pipe' returns a new OBSERVABLE that is cold and unicast
 * 
 *  # Async Subject    - Same as subject, but also doesn't emit any values until it is marked as 'complete'
 *                       Only last value is emitted
 *  # Behavior Subject - Same as subject, but also takese an initial 'seed' value.
 *                       New subscribers instantly get the most recent value
 *  # Replay Subject   - Same as subject, but also new subscribers instantly get sent all previously emitted values
 * 
 *  1. Observer - We can use this to throw in values
 *  2. Observable - We can use this to watch for values
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }
}
