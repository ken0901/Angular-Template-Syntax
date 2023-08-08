import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

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

/**
 *  Success Command                       Error Command                             Clear Command
 *   key            value              key               value                     key         value
 *  text    'Fetched 10 articles'      text      'Error fetching weather'          type        'clear'
 *  type         'success'             type             'error'                     id           2
 *   id               1                 id                 2
 * 
 */

export interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messagesInput: Subject<Command>;
  messagesOutput: Observable<Command[]>;

  constructor() {
    this.messagesInput = new Subject<Command>()
    this.messagesOutput = this.messagesInput.pipe(
      scan((acc: Command[], value: Command) => {
        if(value.type === 'clear') {
          return acc.filter(message => message.id !== value.id);
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  // getMessages() {
  //   return this.messagesInput.pipe(
  //     scan((acc: Command[], value: Command) => {
  //       if(value.type === 'clear') {
  //         return acc.filter(message => message.id !== value.id);
  //       } else {
  //         return [...acc, value];
  //       }
  //     }, [])
  //   );
  // }

  addSuccess(message: string) {
    const id = this.randomId();

    this.messagesInput.next({
      id,
      text: message,
      type: 'success'
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  addError(message: string) {
    const id = this.randomId();

    this.messagesInput.next({
      id,
      text: message,
      type: 'error'
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  clearMessage(id: number) {
    this.messagesInput.next({
      id,
      type: 'clear'
    });
  }

  private randomId() {
    return Math.round(Math.random() * 10000);
  }
}
