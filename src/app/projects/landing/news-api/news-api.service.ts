import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '';
  private country = 'us';

  pagesInput: Subject<number>;
  pagesOutput: Observable<any>;
  numberOfPages: Observable<number>;

  constructor() {
    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country',this.country)
          .set('pageSize',String(this.pageSize))
          .set('page', String(page));
      })
    );
   }
}
